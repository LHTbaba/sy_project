<template>
	<view class="" style="background: #ffffff;width: 100vw;height: 100vh;" id="wrap">
		<uni-header id='header'>
			<view slot="header_left" style="font-size:34rpx;">
				<image src="../../static/img/sybt.png" style="width: 256rpx;height: 48rpx;margin-left: -10rpx;" mode=""></image>
			</view>
		</uni-header>
		<view class="admin_box" id="admin_box">
			<view class="admin_left">
				<image src="../../static/img/weizhi.png" style="width: 32rpx;height: 40rpx;margin-right: 10rpx;margin-top: 6rpx;"
				 mode=""></image>
				<text class="admin_text">{{citydata}}</text>
				<!-- <button style="font-size: 24rpx;" type="default" @click="openDY()">点我订阅</button> -->
			</view>
			<view class="admin_right">
				{{weather}}
			</view>
		</view>
		<view class="msg_box" id="msg_box" @click="toMsg()">
			<view class="msg_left">
				<text class="msg_text">您有预警信息待查看</text>
			</view>
			<view class="msg_right">
				<icon class="iconfont iconzuojiantou" style="font-size: 30rpx;transform: rotate(180deg);margin-top: 20rpx;margin-right: 20rpx;"></icon>
			</view>
		</view>
		<scroll-view :style="{height:scrollerHeight}" scroll-y="auto">
			<view class="main" style="background: #fff;">
				<view class="menu_list">
					<view class="menu_item menu_item01" @click="rhhs()" v-if="menuList.includes('20211013092753828A20200000053706')">
						<text class="menu_h3">入户核实</text>
					</view>
					<view class="menu_item menu_item02" @click="srjc()" v-if="menuList.includes('20211013092753828A20200000053706')">
						<text class="menu_h3">户信息查询</text>
					</view>
					<view class="menu_item menu_item03" @click="jcdx()" v-if="menuList.includes('20211013092753828A20200000053703')">
						<text class="menu_h3">措施差异</text>
					</view>
					<view class="menu_item menu_item04" @click="tphxx()" v-if="menuList.includes('20211013092753828A20200000053706')">
						<text class="menu_h3">帮扶走访</text>
					</view>
				</view>
				<view class="tj_title">
					数据统计
				</view>
				<view class="zfsb_box" @click="slrqtj()" v-if="menuList.includes('20211013092753828A20200000053708')">
					<view class="tabview_left">
						<image src="../../static/img/sbtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">三类人群数据统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="bdzfsbtj()"  v-if="menuList.includes('20211013092753828A20200000053707')">
					<view class="tabview_left">
						<image src="../../static/img/list02.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">防贫监测数据调度</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="qqsydbtj()" v-if="menuList.includes('20211013092753828A20200000053709')">
					<view class="tabview_left">
						<image src="../../static/img/list03.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">三线预警数据统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<!-- <text class="sh_num" v-if="shNums>0">{{shNums}}</text> -->
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="qqsydbjg()" v-if="menuList.includes('20211013092753828A20200000053710')">
					<view class="tabview_left">
						<image src="../../static/img/list04.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">入户核实审核数据</text>
						</view>
					</view>
					<view class="tabview_right">
						<!-- <text class="sh_num" v-if="shNums>0">{{shNums}}</text> -->
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="srjctj()" v-if="menuList.includes('20211013092753828A20200000053710')">
					<view class="tabview_left">
						<image src="../../static/img/list05.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">帮扶措施数据</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="srjctj()" v-if="menuList.includes('20211013092753828A20200000053710')">
					<view class="tabview_left">
						<image src="../../static/img/list06.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">帮扶工作统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
			</view>

		</scroll-view>
		<view class="tabber" id="tabber">
			<view class="tabber_item">
				<image src="../../static/img/home1.png" class="tabber_icon" mode=""></image>
				<text class="tabber_text">首页</text>
			</view>
			<view class="tabber_item" @click="toWode()">
				<image src="../../static/img/wode1.png" class="tabber_icon" mode=""></image>
				<text class="tabber_text">我的</text>
			</view>
		</view>
		<view class="mask" v-if="msgBool">

		</view>
		<view class="dt_box" v-if="msgBool">
			<!-- <image src="../../static/img/msg_img.png" class="tx_icon" mode=""></image> -->
			<view class="dt_h3">
				任务提醒
			</view>
			<scroll-view class="tx_list" scroll-y="true">
				<view class="tx_item" v-for="(item,index) in list" :key='index' v-if="item.QNUM>0">
					<view class="tx_top">
						<text class="tx_left">{{item.QNAME2}}</text>
						<view class="tx_right">
							<text class="tx_strong">{{item.QNUM}}</text>条
						</view>
					</view>
					<view class="tx_below">
						<view class="">
							其中已超时
							<text class="tx_strong">{{item.NUM_1}}</text>条
						</view>
						<view class="">
							即将超时
							<text class="tx_strong">{{item.NUM_2}}</text>条
						</view>
					</view>
				</view> 
			</scroll-view>
			<view class="next_cl" @click="next_cl()">
				下次处理
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
				citydata: "",
				weather: '',
				list:[],
				menuList:[],
				msgBool:false,
				scrollerHeight: '', //路径点集合 
			}
		},
		onShow() {

		},
		onLoad() {
			var _this = this;
			this.getOpenId();
			_this.getUserLocation();
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			_this.getHeight();
		},
		methods: {
			toWode() {
				// this.openDY();
				uni.redirectTo({
					url: '../user/user'
				})
			},
			next_cl(){
				this.msgBool=false;
			},
			getToken() {
				uni.request({
					url: config.baseUrl + '/accessToken/loadDataReturnToken?&cmd.LOGINNAME=' + uni.getStorageSync('userName') +
						'&cmd.USERID=' + uni.getStorageSync('userId'), //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',

					},
					method: 'GET', //请求方式  或GET，必须为大写
					success: res => {
						console.log(2)
						console.log(res.data.RPWD);
						uni.hideLoading();
						uni.request({
							url: config.baseUrl + '/accessToken/token?cmd.grant_type=userPwd&cmd.USERID=' + uni.getStorageSync('userId') +
								'&cmd.account=' + uni.getStorageSync('userName') + '&cmd.password=' + res.data.RPWD, //仅为示例，并非真实接口地址。 
							header: {
								'Content-Type': 'application/x-www-form-urlencoded',
							},
							method: 'GET', //请求方式  或GET，必须为大写
							success: res => {
								console.log(33)
								console.log(res.data);
								uni.hideLoading();
								if (res.data[0].code == '0') {
									uni.setStorageSync('token', res.data[0].data.accessToken);
									uni.hideLoading();
								};
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
			},
			getzcwh() {
				var _this = this;
				this.list=[];
				uni.showLoading();
				this.$api.getMsg({
					'cmd.USER_ID': uni.getStorageSync('userId'),
					'cmd.QOPENID': uni.getStorageSync('openId'), 
				}).then(res => { 
					uni.hideLoading(); 
					_this.list = _this.list.concat(res[0].UTIL_LIST); 
					var arr=[];
					_this.list.forEach(item=>{
						if(item.QNUM>0){
							arr.push(item)
						}
					});
					if(arr.length>0){
						_this.msgBool=true
					};
					console.log('++++')
					console.log(_this.list)
				}).catch(err => {
					console.log(err)
					uni.hideLoading()
					_this.$toast(err)
				})
			},
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height;
				}).exec();
				_this.$nextTick(function() {
					query.select('#header').boundingClientRect(data => {
						_this.scrollerHeight = _this.scrollerHeight - data.height - _this.$store.state.barHeight;
					}).exec();
				});
				_this.$nextTick(function() {
					query.select('#msg_box').boundingClientRect(data => {
						_this.scrollerHeight = _this.scrollerHeight - data.height;
					}).exec();
				});
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
			getUserLocation: function() {
				let vm = this;
				wx.getSetting({
					success: (res) => {
						console.log(666)
						// res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
						// res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
						// res.authSetting['scope.userLocation'] == true    表示 地理位置授权
						if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
							wx.showModal({
								title: '请求授权当前位置',
								content: '需要获取您的地理位置，请确认授权',
								success: function(res) {
									if (res.cancel) {
										wx.showToast({
											title: '拒绝授权',
											icon: 'none',
											duration: 1000
										})
									} else if (res.confirm) {
										wx.openSetting({
											success: function(dataAu) {
												if (dataAu.authSetting["scope.userLocation"] == true) {
													vm.$toast('授权成功')
													// wx.showToast({
													//   title: '授权成功',
													//   icon: 'success',
													//   duration: 1000
													// })
													//再次授权，调用wx.getLocation的API
													vm.getlocation();
												} else {
													vm.$toast('授权失败')
												}
											}
										})
									}
								}
							})
						} else if (res.authSetting['scope.userLocation'] == undefined) {
							//调用wx.getLocation的API
							vm.getlocation();
						} else {
							//调用wx.getLocation的API
							vm.getlocation();
						}
					}
				})
			},
			getlocation() {
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: (res) => {
						let that = this
						const latitude = res.latitude;
						const longitude = res.longitude;
						console.log(res)
						uni.request({
							header: {
								"Content-Type": "application/text"
							},
							//注意:这里的key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
							url: 'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=' + res.longitude + ',' + res.latitude +
								'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
							success(re) {
								console.log(re)
								if (re.statusCode === 200) {
									that.citydata = re.data.regeocode.addressComponent.city
									uni.request({
										url: 'https://devapi.qweather.com/s6/weather',
										data: {
											key: '42b5672ec9d744debd5ba1f3e6bcad08',
											location: that.citydata
										},
										method: 'GET',
										success: res => {
											console.log(res);
											var data = res.data;
											that.weather = data.HeWeather6[0].now.cond_txt + ',' + data.HeWeather6[0].now.tmp + '℃';
											// this.cylinderEmpty.temperature = Math.round(res.data.data.wendu);
										},
										fail: () => {
											this.openmsg("警告", "天气接口获取失败")
										},
										complete: () => {}
									});

								} else {
									console.log("获取信息失败，请重试！")
								}
							}
						});
					}
				});

			},
			bdzfsbtj() {
				uni.navigateTo({
					url: '../hstjList/hstjList'
				})
			},
			slrqtj() {
				uni.navigateTo({
					url: '../webview/webview?type=slrqtj'
				})
			},
			tphxx(){
				uni.navigateTo({
					url: '../webview/webview?type=tphxx'
				})
			},
			qqsydbtj() {
				uni.navigateTo({
					url: '../webview/webview?type=qqsydbtj'
				})
			},
			qqsydbjg() {
				uni.navigateTo({
					url: '../webview/webview?type=qqsydbjg'
				})
			},
			srjctj() {
				uni.navigateTo({
					url: '../sjtjList/sjtjList'
				})
			},
			slrq() {
				uni.navigateTo({
					url: '/pages/people/people',
				});
			},
			toMsg() {
				uni.navigateTo({
					url: '/pages/msgList/msgList',
				});
			},

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
								method: 'GET',
								success(res) {
									console.log(res)
									uni.setStorageSync('openId', res.data.openid);
									_this.openId = uni.getStorageSync('openId');
									_this.getRole(); 
								},
								error(err){
									console.log(err)
								}
							});
						},
						fail: err => {
							console.log('登录失败：', err)
						}
					})
				} else {
					console.log(2);
					_this.openId = uni.getStorageSync('openId');
					_this.getRole();
					 
				}
			},
			getRole() {
				var _this = this;
				uni.request({
					url: config.baseUrl + '/LoginByOpenId', 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					data: {
						'openId': _this.openId
					},
					method: 'POST', //请求方式  或GET，必须为大写
					success: res => {
						if (res.data.StatusCode == '200') {
							_this.$store.commit('login', res.data.JESSIONID);
							_this.$store.commit('setUser', res.data.USERNAME);
							_this.$store.commit('setPhone', res.data.PHONE);
							_this.$store.commit('setUserId', res.data.USERID);
							uni.setStorageSync('userName', res.data.LOGINNAME);
							_this.menuList=[];
							res.data.MENULIST.forEach(item=>{
								_this.menuList.push(item.ID)
							}); 
							console.log(_this.menuList)
							_this.openId = uni.getStorageSync('openId');
							_this.zhName = uni.getStorageSync('zhName');
							_this.userId = uni.getStorageSync('userId');
							_this.avatarUrl = uni.getStorageSync('avatarUrl');
							_this.getToken();
							_this.getzcwh();
						} else {
							_this.$toast(res.data.Message);
							setTimeout(function() {
								uni.reLaunch({
									url: '../login/login'
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
			zfsb() {
				this.openDY();
				uni.navigateTo({
					url: '../webview/webview?type=zfsb'
				})
			},
			rhhs() {
				this.openDY();
				uni.navigateTo({
					url: '../rhhsMenu/rhhsMenu'
				})
			},
			srjc() {
				this.openDY();
				uni.navigateTo({
					url: '../webview/webview?type=srjc'
				})
			},
			sjtj() {
				this.openDY();
				uni.navigateTo({
					url: '../webview/webview?type=wcjtj'
				})
			},
			jcdx() {
				this.openDY();
				uni.navigateTo({
					url: '../webview/webview?type=jcdx'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.mask {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		z-index: 9999;
		background: rgba(0, 0, 0, .5);
	}

	.next_cl {
		border-top: 1px solid #dfdfdf;
		padding: 0px 30rpx;
		/* padding-top: 0px; */
		line-height: 60px;
		height: 100rpx;
		color: #BFBFBF;
	}

	.tx_strong {
		font-size: 32rpx;
		font-weight: bold;
		color: #F45520;
		margin-right: 10rpx;
	}

	.dt_box {
		width: 80%;
		height: auto;
		box-sizing: border-box;
		/* padding: .4rem; */
		max-height: 740rpx;
		background: #fff;
		border-radius: 12rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		z-index: 9999;
		margin: auto;
		text-align: center;

		.tx_icon {
			margin-bottom: 0px;
			margin-top: 50rpx;
			width: 120rpx;
			height: 120rpx;

		}

		.dt_h3 {
			font-size: 36rpx;
			color: #424242;
			/* margin-bottom: 30rpx; */
			padding-bottom: 30rpx;
			border-bottom: 1px solid #dfdfdf;
			margin-top: 30rpx;
		}

		.tx_list {
			box-sizing: border-box;
			padding: 0rpx;
			height: 500rpx;

			.tx_item {
				width: 85%;
				margin: 30rpx auto;
				box-sizing: border-box;
				justify-content: space-between;
				padding: 20rpx;
				border-radius: 10rpx;
				border: 1px solid #00B65A;
				margin-bottom: 30rpx;
				font-size: 28rpx;
				color: #797979;
				background: #fff;

				.tx_top {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.tx_below {
					width: 100%;
					display: flex;
					font-size: 26rpx;
					justify-content: space-between;
					align-items: center;
					color: #797979;
					margin-top: 20rpx;
				}
			}
		}
	}

	.menu_h3 {
		font-size: 32rpx;
		font-weight: bold;
	}

	.sh_num {
		padding: 0rpx 16rpx;
		background: #ff4100;
		border-radius: 50rpx;
		color: #fff;
		margin-left: 10rpx;
		font-size: 26rpx;
	}

	.tabber {
		padding: 0px 30rpx;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		position: fixed;
		z-index: 9999;
		bottom: 0;
		left: 0;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;

		.tabber_item {
			height: 112rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.tabber_icon {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 10rpx;
			}

			.tabber_text {
				font-size: 30rpx;
				color: rgb(162, 174, 191);
			}
		}
	}

	.tj_title {
		padding-left: 30rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		position: relative;
		margin-bottom: 20rpx;
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
			background: #46A496;
		}
	}

	.menu_list {
		overflow: hidden;

		.menu_item {
			width: calc((100% - 30rpx) / 2);
			height: 200rpx;
			padding-top: 60rpx;
			padding-left: 24rpx;
			position: relative;
			box-sizing: border-box;
			float: left;
			margin-bottom: 30rpx;
			margin-right: 30rpx;
			border-radius: 16rpx;
			font-size: 30rpx;
			color: #46A496;
			font-weight: bold;
			&:nth-child(2n) {
				margin-right: 0px;
			}
		}
		.menu_item01 {
			background: url('../../static/img/menu_item01.png') no-repeat center/cover;
		}
		.menu_item02 {
			background: url('../../static/img/menu_item02.png') no-repeat center/cover;
		}
		.menu_item03 {
			background: url('../../static/img/menu_item03.png') no-repeat center/cover;
		}
		.menu_item04 {
			background: url('../../static/img/menu_item04.png') no-repeat center/cover;
		}
	}

	.msg_box {
		width: 90%;
		box-sizing: border-box;
		margin: 30rpx auto;
		background: url('../../static/img/msg_box.png') no-repeat center/cover;
		height: 65rpx;
		color: #333333;
		font-family: HappyZcool-2016;
		display: flex;
		font-size: 30rpx;
		justify-content: space-between;
		align-items: center;
		.msg_left {
			margin-left: 100rpx;
			font-size: 24rpx;
			color: #F58F33;
		}
		.msg_right {
			font-size: 26rpx;
			color: #F58F33;
		}
	}

	.admin_box {
		width: 100%;
		box-sizing: border-box;
		padding: 0px 30rpx;
		background: linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);
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
			padding: 30rpx 30rpx;
			border-radius: 30rpx;
			overflow: hidden;
			display: flex;
			margin-bottom: 30rpx;
			justify-content: space-between;
			box-shadow: 0px 0.67px 2.67px 0px #dddddd;


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
						color: #192321;
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
