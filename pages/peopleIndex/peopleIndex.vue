<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header id='header'>
			<view slot="header_left" style="font-size:34rpx;">
				<image src="../../static/img/sybt.png" style="width: 240rpx;height: 60rpx;margin-left: -10rpx;" mode=""></image>
			</view>
		</uni-header>
		<view class="admin_box" id="admin_box">
			<view class="admin_left">
				<image src="../../static/img/weizhi.png" style="width: 32rpx;height: 40rpx;margin-right: 10rpx;margin-top: 6rpx;" mode=""></image>
				<text class="admin_text">{{citydata}}</text>
				<!-- <button style="font-size: 24rpx;" type="default" @click="openDY()">点我订阅</button> -->
			</view>
			<view class="admin_right"   >
				 {{weather}}
			</view>
		</view>
		<!-- <view class="msg_box" id="msg_box" @click="toMsg()">
			<view class="admin_left">
				<text class="admin_text" style="color: rgb(38, 51, 67);font-weight: bold;">系统提示</text>
				<button style="font-size: 24rpx;" type="default" @click="openDY()">点我订阅</button>
			</view>
			<view class="admin_right">
				您有入户核查任务待审批<icon class="iconfont iconzuojiantou" style="font-size: 30rpx;transform: rotate(180deg);color: rgb(162, 174, 191);margin-top: 20rpx;"></icon>
			</view>
		</view> -->
		<scroll-view :style="{height:scrollerHeight}" scroll-y="auto">
			<view class="main" style="background: #fff;">
				<view class="menu_list">
					<view class="menu_item menu_item1" @click="zzsb()">
						<view class="menu_top">
							<text class="menu_h3">自主上报</text>
							<image src="../../static/img/sy_right1.png" class="sy_right" mode=""></image>
						</view>
						<view class="menu_bottom">
							农户自主申请上报
						</view>
						<image class="bottom_bg" src="../../static/img/pzzsb.png" mode=""></image>
					</view>
					<view class="menu_item menu_item2" @click="jdsearch()">
						<view class="menu_top">
							<text class="menu_h3">进度查询</text>
							<image src="../../static/img/sy_right2.png" class="sy_right" mode=""></image>
						</view>
						<view class="menu_bottom">
							申报进度查询
						</view>
						<image class="bottom_bg" src="../../static/img/pjdcx.png" mode=""></image>
					</view> 
					<view class="menu_item menu_item4" @click="pjcdx()" v-if="jcdx">
						<view class="menu_top">
							<text class="menu_h3">监测对象</text>
							<image src="../../static/img/sy_right4.png" class="sy_right" mode=""></image>
						</view>
						<view class="menu_bottom">
							监测对象功能介绍
						</view>
						<image class="bottom_bg" src="../../static/img/pjcdx.png" mode=""></image>
					</view>
				</view>
				<view class="top_title">
					<image src="../../static/img/banner.png" style="width: 100%;height: 100%;"></image>

				</view>
				 
			</view> 
		</scroll-view>
		<view class="tabber" id="tabber">
			<view class="tabber_item">
				<image src="../../static/img/home1.png" class="tabber_icon" mode=""></image>
				<text class="tabber_text">首页</text>
			</view>
			<view class="tabber_item" @click="toUser()">
				<image src="../../static/img/wode1.png" class="tabber_icon" mode=""></image>
				<text class="tabber_text">我的</text>
			</view>
		</view>
	</view>


</template>

<script>
	import config from "../../config.js";
	import storage from "../../static/js/storage.js"
	export default {
		data() {
			return {
				title: '首页',
				zhName: "于都县",
				shNums: 1,
				citydata:"",
				weather:"",
				openId:'',
				jcdx:false,
				scrollerHeight: '', //路径点集合 
			}
		},
		onShow() {
			// _this.getOpenId();
		},
		onLoad() {
			var _this = this; 
			_this.getlocation();
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;  
			var _this = this; 
			_this.getHeight();
			_this.getOpenId(); 
		},
		methods: {
			getOpenId() {
				//AppSecret小程序密钥：3a3d10db6b97a7ba8aacb68129bdacd1
				//wx188b70d363e4dc3e 
				var _this = this;
				_this.$showLoading();
				if (!uni.getStorageSync('openId')) {
					uni.login({
						provider: 'weixin',
						success: res => {
							console.log('登录成功：', res);
							//获取临时登录凭证code
							this.Code = res.code;
							console.log(res);
							uni.request({
								url: config.baseUrl + '/GetOpenId?js_code=' + res.code + '&tdsourcetag=s_pcqq_aiomsg',
								method: 'post',
								success(res) {
									uni.setStorageSync('openId', res.data.openid);
									_this.openId = uni.getStorageSync('openId');
									_this.getRole();
								}
							});
							//获取openid，session_key
							// 			let appid = "wx188b70d363e4dc3e" //需替换
							// 			let secret = "3a3d10db6b97a7ba8aacb68129bdacd1" //需替换
							// 			let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
							// 				'&js_code=' +
							// 				this.Code + '&grant_type=authorization_code';
							// 			uni.request({
							// 				url: url, // 请求路径
							// 				success: res => {
							// 					console.log(res);
							// 					if(res.statusCode=='200'){
							// 						uni.setStorageSync('openId',res.data.openid)
							// 					}
							// 					// console.log('openid session_key:', res.data);
							// 					// this.openid = res.data.openid
							// 					// this.session_key = res.data.session_key
			
							// 					// //获取用户信息
							// 					// uni.getUserInfo({
							// 					// 	provider: 'weixin',
							// 					// 	success: res => {
							// 					// 		console.log('获取用户信息', res);
							// 					// 		//解密encryptedData，可获取用户openId
							// 					// 		let pc = new WXBizDataCrypt(appid, this.session_key);
							// 					// 		let data = pc.decryptData(res.encryptedData, res.iv);
							// 					// 		console.log('解密后：', data)
							// 					// 	},
							// 					// 	fail: err => {
							// 					// 		console.log('获取用户信息错误：', err)
							// 					// 	}
							// 					// })
			
							// 				},
							// 				fail: err => {
							// 					console.log('请求失败：', err)
							// 				}
							// 			});
						},
						fail: err => {
							console.log('登录失败：', err)
						}
					})
				} else {
					console.log(2);
					_this.openId = uni.getStorageSync('openId');
					console.log(443)
					_this.getRole();
				}
			},
			getRole() {
				var _this = this; 
				uni.request({
					url: config.baseUrl + '/loginByCardAndOpenId', //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					data: {
						'openId': _this.openId
					},
					method: 'POST', //请求方式  或GET，必须为大写
					success: res => { 
						console.log(res.data);
						if (res.data.StatusCode == '200') {
							_this.$store.commit('login', res.data.JESSIONID);
							_this.$store.commit('setUser', res.data.USERNAME);
							_this.$store.commit('setPhone', res.data.PHONE);
							_this.$store.commit('setUserId', res.data.USERID);
							uni.setStorageSync('userCard',res.data.USER_CARD);
							console.log(res.data.OU_AAA001);
							if(res.data.OU_AAA001!='null'){
								_this.jcdx=true;
							};  
							uni.setStorageSync('poorName',res.data.USER_NAME);
							uni.setStorageSync('jcdx',res.data.OU_AAA001);
							uni.setStorageSync('puserType',res.data.OU_USERTYPE); 
							_this.openId = uni.getStorageSync('openId'); 
							// _this.getToken(); 
							// var arr = [];
							// res.data.MENULIST.forEach(item => {
							// 	arr.push(item.ID)
							// });
							// uni.setStorageSync('cardBool', arr.join(','));
							// _this.cardBool = uni.getStorageSync('cardBool');
							// if (_this.cardBool.includes('20181207094553190007100000208811')) {
							// 	_this.getNums();
							// };
							// _this.getshNums();
						} else {
							_this.$toast(res.data.Message);
							setTimeout(function() {
								uni.reLaunch({
									url: '../peopleLogin/peopleLogin'
								})
							}, 1000)
			
						}
					},
					fail: err => {
						console.log(err)
						uni.showToast({
							icon: 'none',
							title: '请求出错: ' + err,
							duration: 2000
						});
					}
				})
				//    this.$api.sfOpenid({
				// 	openId:this.openId
				// }).then(res=>{
				// 	console.log(res); 
				// 	if(res.StatusCode=='200'){
				// 		uni.$toast(res.RETDESC)
				// 	}; 
			
			},
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height;
				}).exec();
				_this.$nextTick(function() {
					query.select('#header').boundingClientRect(data => {
						_this.scrollerHeight = _this.scrollerHeight - data.height;
					}).exec();
				});
				// _this.$nextTick(function() {
				// 	query.select('#msg_box').boundingClientRect(data => {
				// 		_this.scrollerHeight = _this.scrollerHeight - data.height;
				// 	}).exec();
				// });
				_this.$nextTick(function() {
					query.select('#admin_box').boundingClientRect(data => {
						_this.scrollerHeight = _this.scrollerHeight - data.height;
					}).exec();
				});
				_this.$nextTick(function() {
					query.select('#tabber').boundingClientRect(data => {
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				});
			},
			getlocation() {
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				    success:(res)=>{
						let that=this
				        const latitude = res.latitude;
				        const longitude = res.longitude;
						console.log(res)
				        uni.request({
							header:{
								"Content-Type": "application/text"
							},
							//注意:这里的key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
							url:'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location='+res.longitude+','+res.latitude+'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
							success(re) {
								console.log(re)
								if(re.statusCode===200){
									that.citydata=re.data.regeocode.addressComponent.city
									uni.request({
												url: 'https://devapi.qweather.com/s6/weather',
												data:{
													key:'42b5672ec9d744debd5ba1f3e6bcad08',
													location:that.citydata
												},
												method: 'GET',
												success: res => {
													console.log(res);
													var data=res.data;
													that.weather=data.HeWeather6[0].now.cond_txt+','+data.HeWeather6[0].now.tmp+'℃'; 
													// this.cylinderEmpty.temperature = Math.round(res.data.data.wendu);
												},
												fail: () => {
													// this.openmsg("警告","天气接口获取失败")
												},
												complete: () => {}
											}); 
									
								}else{
									console.log("获取信息失败，请重试！")
								}
							 }
						});
				    }
				}); 
			
			},
			toMsg() {
				uni.navigateTo({
					url: '/pages/msgList/msgList',
				});
			},
			toUser() {
				uni.redirectTo({
					url: '../peopleUser/peopleUser',
				}); 
				  // this.openDY();
			},
			zzsb(){
				uni.navigateTo({
					url: '../webview/webview?type=pzzsb'
				})
				 // this.openDY();
			},
			jdsearch(){
				uni.navigateTo({
					url: '../webview/webview?type=pjdsearch'
				})
				 // this.openDY();
			},
			pjcdx(){
				uni.navigateTo({
					url: '../webview/webview?type=pjcdx'
				})
				 // this.openDY();
			},
			dyNums() {
				var _this = this;
				this.$api.dyNums({
					'cmd.OPENID': this.openId,
					'cmd.USERID': this.userId
				}).then(res => {
					console.log(res);
					if (res[0].SUCCESS == '1') {  
						console.log('进来')
						uni.setStorageSync('dyNums', res[0].RENUM);
					} else {
						_this.$toast(res[0].TIPS)
					}
				}).catch(err => {
			
				})
			}, 
			openDY() {
				var _this = this;
				wx.getSetting({
					withSubscriptions: true, //  这里设置为true,下面才会返回mainSwitch
					success: function(res) {
						// 调起授权界面弹窗
						if (res.subscriptionsSetting.mainSwitch) { // 用户打开了订阅消息总开关
							if (res.subscriptionsSetting.itemSettings != null) { // 用户同意总是保持是否推送消息的选择, 这里表示以后不会再拉起推送消息的授权
								let moIdState = res.subscriptionsSetting.itemSettings['ekU_mD8JK1fmYBXUOc-u7ClzS6k0BfKJWnvyCSTxUxw']; // 用户同意的消息模板id
								console.log(moIdState);
								if (moIdState === 'accept') {
									console.log('接受了消息推送');
									wx.requestSubscribeMessage({ // 调起消息订阅界面
										tmplIds: ['ekU_mD8JK1fmYBXUOc-u7ClzS6k0BfKJWnvyCSTxUxw'],
										success(res) {
											console.log('订阅消息 成功 ');
											console.log(res);
											if (res['ekU_mD8JK1fmYBXUOc-u7ClzS6k0BfKJWnvyCSTxUxw'] == 'accept') {
												_this.dyNums();
											}
										},
										fail(er) {
											console.log("订阅消息 失败 ");
											console.log(er);
										}
									})

								} else if (moIdState === 'reject') {
									console.log("拒绝消息推送");

								} else if (moIdState === 'ban') {
									console.log("已被后台封禁");

								}
							} else {
								// 当用户没有点击 ’总是保持以上选择，不再询问‘  按钮。那每次执到这都会拉起授权弹窗
								wx.showModal({
									title: '提示',
									content: '请授权开通服务通知',
									showCancel: true,
									success: function(ress) {
										if (ress.confirm) {
											wx.requestSubscribeMessage({ // 调起消息订阅界面
												tmplIds: ['ekU_mD8JK1fmYBXUOc-u7ClzS6k0BfKJWnvyCSTxUxw'],
												success(res) {
													console.log('订阅消息 成功 ');
													console.log(res);
													if (res['ekU_mD8JK1fmYBXUOc-u7ClzS6k0BfKJWnvyCSTxUxw'] == 'accept') {
														_this.dyNums();
													}

												},
												fail(er) {
													console.log("订阅消息 失败 ");
													console.log(er);
												}
											})

										}
									}
								})
							}

						} else {
							console.log('订阅消息未开启')
						}
					},
					fail: function(error) {
						console.log(error);
					},
				})
			},

			zfsb() {
				uni.navigateTo({
					url: '../zfsbSearch/zfsbSearch'
				})
			},
			rhhs() {
				uni.navigateTo({
					url: '../rhhsList/rhhsList'
				})
			},
			yjjc() {
				uni.navigateTo({
					url: '../yjjcList/yjjcList'
				})
			},
			sjtj() {
				uni.navigateTo({
					url: '../sjtjList/sjtjList'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.sh_num {
		padding: 0rpx 16rpx;
		background: #ff4100;
		border-radius: 50rpx;
		color: #fff;
		margin-left: 10rpx;
		font-size: 26rpx;
	}
    .menu_h3{
		font-size: 36rpx;
		font-weight: bold;
	}
	.tj_title {
		padding-left: 30rpx;
		line-height: 100rpx;
		font-size: 36rpx;
		position: relative;
		margin-bottom: 20rpx;
		box-shadow: 0px -0.5px rgba(243, 244, 246, 1) inset;
		color: rgb(38, 51, 67);

		&::after {
			display: block;
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			height: 40%;
			margin: auto;
			width: 10rpx;
			background: rgb(87, 107, 222);
		}
	}
    .tabber{
    		 padding: 0px 30rpx; 
    		 width: 100%;
    		 background: #fff;
    		 box-sizing: border-box;
    		 display: -webkit-box;
    		 display: -webkit-flex;
    		 display: flex;
    		 position: fixed;
    		 bottom: 0;
    		 left: 0;
    		 -webkit-box-align: center;
    		 -webkit-align-items: center;
    		 align-items: center;
    		 .tabber_item{
    			height: 112rpx;
    			 flex: 1;
    			 display: flex;
    			 flex-direction: column;
    			 align-items: center;
    			 justify-content: center;
    			 .tabber_icon{
    				 width: 50rpx;
    				 height: 50rpx;
    				 margin-bottom: 10rpx;
    			 }
    			 .tabber_text{
    				 font-size: 30rpx;
    				 color: rgb(162, 174, 191);
    			 }
    		 }
    }
	.menu_list {
		overflow: hidden;

		.menu_item {
			height: 200rpx;
			padding: 30rpx;
			position: relative;
			box-sizing: border-box;
			float: left;
			margin-bottom: 30rpx;
			margin-right: 30rpx;
			border-radius: 16rpx;

			&:nth-child(2n) {
				margin-right: 0px;
			};
			width:100%;

			.menu_top {
				margin-bottom: 30rpx;
				font-size: 32rpx;

				.sy_right {
					width: 40rpx;
					margin-top: 30rpx;
					margin-left: 20rpx;
					height: 30rpx;
				}
			}

			.menu_bottom {
				color: rgb(162, 174, 191);
				font-size: 28rpx;
			}

			.bottom_bg {
				position: absolute;
				width: 100rpx;
				height:80rpx;
				bottom: 30rpx;
				right: 30rpx;
			}
		}

		.menu_item1 {
			background: rgb(251, 251, 239);

			.menu_top {
				color: rgb(101, 101, 35);
			}
		}

		.menu_item2 {
			background: rgb(247, 253, 253);

			.menu_top {
				color: rgb(63, 109, 109);
			}
		}

		.menu_item3 {
			background: rgb(250, 251, 255);

			.menu_top {
				color: rgb(101, 101, 35);
			}
		}

		.menu_item4 {
			background: rgb(250, 251, 255);

			.menu_top {
				color: rgb(128, 35, 35);
			}
		}
	}

	.msg_box {
		width: 100%;
		box-sizing: border-box;
		padding: 0px 30rpx;
		background: #fff;
		height: 80rpx;
		// box-shadow: 0px 1px 4px 0px #000000;
		color: #333333;
		font-family: HappyZcool-2016;
		display: flex;
		font-size: 30rpx;
		justify-content: space-between;
		align-items: center;
	}

	.admin_box {
		width: 100%;
		box-sizing: border-box;
		padding: 0px 30rpx;
		background: rgb(87, 107, 222);
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.admin_left,
		.admin_right {
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.admin_left {
			font-size: 32rpx;
			color: #fff;
		}

		.admin_right {
			font-size: 26rpx;
			color: #fff;
			// opacity: .8;
		}
	}

	.admin_right {
		font-size: 24rpx;
		color: rgb(162, 174, 191);
		display: flex;
		align-items: center;
	}

	.main {
		padding: 30rpx;

		.top_title {
			width: 100%;
			height: 300rpx;
			position: relative;
			margin-bottom: 30rpx;

			.top_name {
				position: absolute;
				color: #fff;
				font-size: 30rpx;
				top: 10rpx;
				display: flex;
				align-items: center;
				right: 10rpx;
			}
		}

		.zfsb_box {
			position: relative;
			z-index: 2;
			background: #fff;
			padding: 50rpx 30rpx;
			border-radius: 16rpx;
			overflow: hidden;
			display: flex;
			margin-bottom: 30rpx;
			justify-content: space-between;
			box-shadow: 0px 0.5px 2px 0px rgba(96, 99, 103, .18);

			&:last-child {
				margin-bottom: 0px;
			}

			.tabview_left {
				display: flex;
				align-items: center;

				.tab_left {
					display: flex;
					flex-direction: column;

					.strong_title {
						font-size: 32rpx;
						font-weight: bold;
						margin-bottom: 10rpx;
						color: #424242;
					}

					.hui_title {
						color: #bfbfbf;
						font-size: 30rpx;
					}
				}
			}

			.tabview_right {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
