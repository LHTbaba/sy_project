<template name='sy'>
	<view class="content">
		<view class="wrap" id='wrap' style="position: relative;background: #FAFAFA;height: 100vh;">
			<uni-header :title='title' id='header'>
				<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
			</uni-header>
			<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>

				<view class="ms_list" :key='index'>
					<view class="ms_item" style="margin-top: 30rpx;">
						<view class="item-left">
							<image src="../../static/img/kefu.png" style="width: 80rpx;height: 80rpx;margin-right: 30rpx;" mode=""></image>
							<view class="ms_right">
								<view class="text" style="color: #555;margin-bottom:10rpx;font-weight:bold">客服热线</view>
								<view class="nums" style="color: #555;"> 4008-717-228 </view>
							</view>
						</view>
						<view>
							<image src="../../static/img/phone.png" style="width: 60rpx;height: 60rpx;margin-right: 30rpx;" mode=""></image>
						</view>
					</view>
					<view class="ms_item" style="margin-top: 30rpx;">
						<view class="item-left">
							<image src="../../static/img/jishu.png" style="width: 80rpx;height: 80rpx;margin-right: 30rpx;" mode=""></image>
							<view class="ms_right">
								<view class="text" style="color: #555;margin-bottom:10rpx;font-weight:bold">技术热线</view>
								<view class="nums" style="color: #555;"> 4008-931-081 </view>
							</view>
						</view>
						<view>
							<image src="../../static/img/phone.png" style="width: 60rpx;height: 60rpx;margin-right: 30rpx;" mode=""></image>
						</view>
					</view>
					<view class="ms_item" style="margin-top: 30rpx;">
						<view class="item-left">
							<image src="../../static/img/qq.png" mode="" style="width: 80rpx;height: 80rpx;margin-right: 30rpx;"></image>
							<view class="ms_right">
								<view class="text" style="color: #555;margin-bottom:10rpx;font-weight:bold">在线服务</view>
								<view class="nums" style="color: #555;"> 25483324123 </view>
							</view>
						</view>
						<view>
							<image src="../../static/img/qq2.png" style="width: 80rpx;height: 80rpx;margin-right: 20rpx;" mode=""></image>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import config from "../../config.js";
	export default {
		name: 'sy',
		props: {

		},
		data() {
			return {
				barheight: '',
				scrollerHeight: "",
				title: '技术支持',
				isMore: false,
				noMore: false,
				pageNum: 1,
				pageSize: 15,
				userId: "",
				refresherTriggered: false,
				_refresherTriggered: false,
				msgList: [],
				whlbIndex: 0,
				keyWord: '',
				list: [{
						SENDTIME: "sdfsdfds",
						CONTENT: 2
					},
					{
						SENDTIME: "sdfsdfds",
						CONTENT: 2
					}
				]
			};
		},
		onShow() {
			var _this = this;
			uni.$on('changeMsg', function(data) {
				console.log(11);
				_this.list = [];
				_this.getzcwh();
			})
		},
		onLoad(params) {
			// this.getOpenId();
			// this.$hideLoading();
			// this.userId = uni.getStorageSync('userId');
			// if (params.QID) {
			// 	this.$api.totuisong({
			// 		'cmd.OPENID': uni.getStorageSync('openId'),
			// 		'cmd.QID': params.QID
			// 	}).then(res => {

			// 	}).catch(err => {

			// 	})
			// };
			// if (params.index) {
			// 	this.whlbIndex = params.index
			// }
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			_this.getHeight();
			// _this.getData();
			// _this.getzcwh();
		},
		methods: {
			getData() {
				uni.showLoading();
				var _this = this;
				this.$api.getMsg({
					'cmd.USER_ID': _this.userId
				}).then(res => {
					console.log(res[0].UTIL_LIST);
					_this.msgList = res[0].UTIL_LIST;
				}).catch(err => {
					uni.hideLoading()
					_this.$toast(err)
				})
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
					_this.getRole();

				}
			},
			getRole() {
				var _this = this;
				uni.request({
					url: config.baseUrl + '/LoginByOpenId', //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					data: {
						'openId': _this.openId
					},
					method: 'POST', //请求方式  或GET，必须为大写
					success: res => {
						console.log(443)
						console.log(res.data);
						if (res.data.StatusCode == '200') {
							_this.$store.commit('login', res.data.JESSIONID);
							_this.$store.commit('setUser', res.data.USERNAME);
							_this.$store.commit('setPhone', res.data.PHONE);
							_this.$store.commit('setUserId', res.data.USERID);
							uni.setStorageSync('userName', res.data.LOGINNAME);
							_this.openId = uni.getStorageSync('openId');
							_this.zhName = uni.getStorageSync('zhName');
							_this.userId = uni.getStorageSync('userId');
							_this.avatarUrl = uni.getStorageSync('avatarUrl');
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
									url: '../people/people'
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
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				});
				// _this.$nextTick(function() {
				// 	query.select('#search_result').boundingClientRect(data => {
				// 		_this.scrollerHeight = (_this.scrollerHeight - data.height)+'px';
				// 	}).exec();
				// });
				// _this.$nextTick(function() {
				// 	query.select('#search_wrap').boundingClientRect(data => {
				// 		_this.scrollerHeight = (_this.scrollerHeight - data.height)+'px';
				// 	}).exec();
				// });

			},
			getzcwh() {
				var _this = this;
				this.list = [];
				uni.showLoading();
				this.$api.getMsg({
					'cmd.USER_ID': uni.getStorageSync('userId'),
					'cmd.QOPENID': uni.getStorageSync('openId'),
				}).then(res => {
					console.log(res)
					uni.hideLoading();
					this.list = this.list.concat(res[0].UTIL_LIST);
				}).catch(err => {
					uni.hideLoading()
					_this.$toast(err)
				})
			},
			search() {
				this.pageNum = 1;
				this.list = [];
				this.getzcwh();
			},
			back() {
				uni.navigateBack({
					delta:1
				})
			},
			dkDetail(id) {
				uni.navigateTo({
					url: '/pages/msgList/msgListDetailCopy?ID=' + id,
				});
			},
			changeWhlb(index) {
				this.whlbIndex = index;
				this.pageNum = 1;
				this.list = [];
				this.getzcwh();
			},
			navigateTo(e) {
				var url = e.currentTarget.dataset.url;
				console.log(url);
				uni.navigateTo({
					url: '/pages' + url,
				});
			},
			handleMsg(item) {
				if (item.QTYPE == '1') {
					uni.navigateTo({
						url: '../webview/webview?type=sjhs'
					})
				};
				if (item.QTYPE == '2') {
					uni.navigateTo({
						url: '../webview/webview?type=sjhs3'
					})
				};
				if (item.QTYPE == '4') {
					uni.navigateTo({
						url: '../webview/webview?type=xjhs'
					})
				};
				if (item.QTYPE == '3') {
					uni.navigateTo({
						url: '../webview/webview?type=xjhs3'
					})
				};
			},
			upper() {
				//console.log('上拉刷新');
				this.pageNum = 1;
				this.list = [];
				this.getzcwh();
			},
			lower() {
				//console.log("下拉加载更多");
				this.pageNum++;
				this.isMore = true;
				this.getzcwh();
				// if (JSON.stringify(this.searchlist) != "{}") {
				// 	this.zgSearch();
				// } else {
				// 	this.getData();
				// }
			},
			refresherrefresh() {
				//console.log("自定义下拉刷新被触发");
				let _this = this;
				if (_this._refresherTriggered) {
					return;
				}
				_this._refresherTriggered = true;
				//界面下拉触发，triggered可能不是true，要设为true
				if (!_this.refresherTriggered) {
					_this.refresherTriggered = true;
				};
				this.pageNum = 1;
				this.noMore = false;
				_this.list = [];
				this.getzcwh();
				// if (JSON.stringify(this.searchlist) != "{}") {
				// 	this.zgSearch();
				// } else {
				// 	this.getData();
				// }
				// this.getData()
			},
			refresherrestore() {
				let _this = this;
				_this.refresherTriggered = false;
				_this._refresherTriggered = false;
			},
			refresherabort() {
				let _this = this;
				_this.refresherTriggered = false;
				_this._refresherTriggered = false;
			},
		}
	}
</script>

<style lang="scss" scoped>
	::-webkit-scrollbar {
		display: none;
	}

	.msg_h3 {
		font-size: 32rpx;
		font-weight: bold;
		color: #F45520;
		margin-right: 10rpx;
	}

	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		display: none
	}

	.ms_list {
		padding: 0px 30rpx;
		margin-bottom: 30rpx;

		.ms_item {
			background: #fff;
			padding: 50rpx 30rpx;
			display: flex;
			box-shadow: 0px 0.5px 2px 0px rgba(96, 99, 103, .18);
			align-items: center;
			justify-content: space-between;
			.item-left {
				display: flex;
			}
		}
	}

	.content {
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		.wrap {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			background: #fff;

			.search_wrap {
				padding: 20rpx 30rpx;

				.search_box {
					width: 100%;
					height: 90rpx;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					background: rgba(255, 255, 255, 1);
					border: 1px solid rgba(234, 239, 236, 1);

					.ipt_text {
						flex: 1;
						height: 100%;
						padding-left: 20rpx;
						font-size: 24rpx;
						color: #929292;
					}

					.search_icon {
						display: inline-block;
						width: 90rpx;
						height: 100%;
						background: url(../../static/img/sousuo.png) center center no-repeat;
						background-size: 50% 50%;
					}
				}

			}

			.whlb {
				width: 100%;
				margin: 0px;
				height: 100rpx;
				box-sizing: border-box;
				padding: 0px 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				background: #F8F9FD;
				border-radius: 16rpx;

				.whlb_item {
					height: 80%;
					box-sizing: border-box;
					border-bottom: 2px solid transparent;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 32rpx;
					color: #9E9FA4;
				}

				.whlb_active {
					color: #2151F4;
					border-color: #2151F4;
				}
			}

			.zcwh_list {
				padding: 0px 0rpx 0px 30rpx;
				background: #fff;

				.zcwh_item {
					width: 100%;
					padding: 20rpx 0px;
					overflow: hidden;
					position: relative;

					&::after {
						display: block;
						content: "";
						position: absolute;
						width: calc(100% - 100rpx);
						bottom: 0;
						left: 100rpx;
						border-bottom: 1px solid #dfdfdf;
					}

					&:last-child::after {
						border-bottom: none;
					}

					.zcwh_item_left {
						height: 100%;
						float: left;
						width: 100%;
						display: flex;

						.zcwh_item_img {
							width: 90rpx;
							height: 90rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: bold;
							border-radius: 4rpx;
							margin-right: 20rpx;
							color: #fff;

							.dotter {
								position: absolute;
								width: 16rpx;
								height: 16rpx;
								background: red;
								border-radius: 50%;
								right: 0rpx;
								top: 6rpx;
							}
						}

						.zcwh_item_img1 {
							background: url(../../static/img/xtsz.png) center center no-repeat;
							background-size: 100% 100%;
						}

						.zcwh_item_img2 {
							background: url(../../static/img/xxtx.png) center center no-repeat;
							background-size: 100% 100%;
						}

						.zcwh_item_img3 {
							background: #58A942;
						}

						.zcwh_text_right {
							height: 100%;
							display: flex;
							justify-content: space-between;
							flex-direction: column;
							flex: 1;

							.zcwh_item_top {
								color: #2D3639;
								font-family: Source Han Sans CN;
								font-weight: bold;
								font-size: 32rpx;
								margin-bottom: 10rpx;
								width: 100%;
								overflow: hidden;
							}

							.zcwh_item_middle {
								color: #526267;

								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								margin-bottom: 10rpx;
								font-size: 24rpx;
							}

							.zcwh_item_bottom {
								color: #9E9FA4;
								width: 400rpx;
								font-family: Source Han Sans CN;
								font-weight: regular;
								font-size: 24rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
								align-items: center;
								overflow: hidden;

								.location_icon {
									display: inline-block;
									width: 24rpx;
									height: 24rpx;
									background: url(../../static/img/location.png) center center no-repeat;
									background-size: 100% 100%;
									margin-right: 10rpx;


								}
							}
						}
					}

					.dk_btn {
						display: inline-block;
						text-align: center;
						color: #2D3639;
						font-size: 24rpx;
					}
				}
			}
		}

		.loading,
		.noMore {
			text-align: center;
		}

		.noMore {
			width: 100%;
			height: 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2D3639;

			.line {
				width: 40rpx;
				border-bottom: 1px solid #dfdfdf;

			}
		}
	}
</style>
