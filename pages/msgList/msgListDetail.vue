<template name='sy'>
	<view class="content">
		<view class="wrap" id='wrap' style="position: relative;">
			<request-loading></request-loading>
			<uni-header :title='title' id='header'>
				<text class="home_icon" slot="header_left" @click="goIndex()"></text>
			</uni-header>
			<scroll-view :style="{height:scrollerHeight}" scroll-y="auto" class="main" ref='main'>
				<view class="content_box">
					<view class="msg_title">
						<view class="mgs_title_left">
							消息通知
						</view>
						<view class="mgs_title_right">
							{{time}}
						</view>
					</view>
					<view class="msg_content">
						{{content}}
					</view>
				</view>
				<button class="btn" id="btn" style="height: 100rpx;" type="primary" v-if="page=='' || page==null" @click="goIndex()">跳转首页</button>
				<button class="btn" id="btn" style="height: 100rpx;" type="primary" v-else @click="goIndex()">点击处理</button>
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
				title: '消息详情',
				id: "",
				userId: '',
				openId: "",
				time: "",
				content: "",
				page: '',
			};
		},
		onLoad(params) {
			this.id = params.ID;
			this.page = params.page;
			var _this = this;
			uni.getSystemInfo({
				success: function(e) {
					console.log(e.statusBarHeight);
					_this.barheight = e.statusBarHeight;
				}
			});
			_this.$hideLoading();


		},
		mounted() {
			var _this = this;
			_this.getOpenId();
			// _this.getzcwh();
			_this.getHeight();

		},
		methods: {
			getOpenId() {
				//AppSecret小程序密钥：3a3d10db6b97a7ba8aacb68129bdacd1
				//wx188b70d363e4dc3e
				var _this = this;
				this.$showLoading();
				uni.login({
					provider: 'weixin',
					success: res => {
						// console.log('登录成功：', res);
						//获取临时登录凭证code
						this.Code = res.code;
						console.log(res);
						uni.request({
							url: config.baseUrl + '/GetOpenId?js_code=' + res.code + '&tdsourcetag=s_pcqq_aiomsg',
							method: 'post',
							success(res) {
								console.log(res)
								uni.setStorageSync('openId', res.data.openid);
								_this.getRole();
							}
						});
					},
					fail: err => {
						console.log('登录失败：', err)
					}
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
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				});
			},
			getRole() {
				var _this = this;
				uni.request({
					url: config.baseUrl + '/LoginByOpenId', //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					data: {
						'openId': uni.getStorageSync('openId')
					},
					method: 'POST', //请求方式  或GET，必须为大写
					success: res => {
						console.log(res.data);
						if (res.data.StatusCode == '200') {
							_this.$store.commit('login', res.data.JESSIONID);
							_this.$store.commit('setUser', res.data.USERNAME);
							_this.$store.commit('setPhone', res.data.PHONE);
							_this.$store.commit('setUserId', res.data.USERID);
							_this.getzcwh();
						} else {
							_this.$toast(res.data.Message);
							// setTimeout(function() {
							// 	uni.reLaunch({
							// 		url: '../login/login'
							// 	})
							// }, 1000)

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
			},

			getzcwh() {
				var _this = this;
				//this.$showLoading(); 
				this.$api.getMsgDetail({
					'cmd.QUSERID': uni.getStorageSync('userId'),
					'cmd.QOPENID': uni.getStorageSync('openId'),
					"cmd.QID": this.id
				}).then(res => {
					console.log(res);
					_this.$hideLoading();
					var data = res[0].LIST[0];
					_this.time = data.SENDTIME;
					_this.content = data.CONTENT;
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
					delta: 1
				})
			},
			dkDetail(id) {
				var ID = JSON.stringify(id)
				uni.navigateTo({
					url: '/pages/zcwhDetail/zcwhDetail?ID=' + ID,
				});
			},
			goIndex() {
				var _this = this;
				_this.openDY();
				if (_this.page == null || _this.page == "") {
					uni.reLaunch({
						url: '/pages/index/index'
					});
				} else {
					uni.reLaunch({
						url: '/' + _this.page
					});
				}


			},
			openDY() {
				var _this = this;
				wx.getSetting({
					withSubscriptions: true, //  这里设置为true,下面才会返回mainSwitch
					success: function(res) {
						// 调起授权界面弹窗
						if (res.subscriptionsSetting.mainSwitch) { // 用户打开了订阅消息总开关
							if (res.subscriptionsSetting.itemSettings != null) { // 用户同意总是保持是否推送消息的选择, 这里表示以后不会再拉起推送消息的授权
								let moIdState = res.subscriptionsSetting.itemSettings['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg']; // 用户同意的消息模板id
								if (moIdState === 'accept') {
									console.log('接受了消息推送');
									wx.requestSubscribeMessage({ // 调起消息订阅界面
										tmplIds: ['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg'],
										success(res) {
											console.log('订阅消息 成功 ');
											console.log(res);
											if (res['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg'] == 'accept') {
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
												tmplIds: ['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg'],
												success(res) {
													console.log('订阅消息 成功 ');
													console.log(res);
													if (res['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg'] == 'accept') {
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
				var userId = uni.getStorageSync('userId');
				var openId = uni.getStorageSync('openId');
				var _this = this;
				this.$api.dyNums({
					'cmd.OPENID': openId,
					"cmd.USERID": userId
				}).then(res => {
					if (res[0].SUCESS == '1') {
						_this.nums = res[0].RENUM;
						uni.setStorageSync('dyNums', res[0].RENUM);
					} else {
						_this.$toast(res[0].TIPS)
					}
				}).catch(err => {
					console.log(err)
				})
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

	.btn {
		width: 100%;
		margin: 30rpx 0rpx;
		background-color: #446BCF !important;
		font-size: 36rpx;
	}

	.home_icon {
		display: inline-block;
		width: 62rpx;
		height: 62rpx;
		background: url(../../static/img/home.png);
		background-size: 100% 100%;
	}

	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		display: none
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
				padding: 0px 30rpx;

				.zcwh_item {
					width: 100%;
					padding: 20rpx 0px;
					overflow: hidden;
					position: relative;

					&::after {
						display: block;
						content: "";
						position: absolute;
						width: 100%;
						bottom: 0;
						left: 0rpx;
						border-bottom: 1px solid #dfdfdf;
					}

					&:last-child::after {
						border-bottom: none;
					}

					.zcwh_item_left {
						height: 100%;
						display: flex;
						align-items: center;

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
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: space-between;
							flex-direction: column;

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
								width: 100%;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								margin-bottom: 10rpx;
								font-size: 24rpx;
							}

							.zcwh_item_bottom {
								color: #9E9FA4;
								font-family: Source Han Sans CN;
								font-weight: regular;
								font-size: 24rpx;
								width: 100%;
								white-space: nowrap;
								text-overflow: ellipsis;
								display: flex;
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

	.main {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		background: #f6f5f5;

		.content_box {
			padding: 30rpx;
			background: #fff;
			border-radius: 20rpx;
		}

		.msg_title {
			padding: 30rpx 0px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #dfdfdf;

			.mgs_title_left {
				color: #000000;
				font-family: PingFang HK;
				font-size: 32rpx;
				font-weight: bold;
			}

			.mgs_title_right {
				color: #CECECE;
				font-size: 28rpx;
			}

		}

		.msg_content {
			padding: 30rpx 0px;
			text-indent: 2em;
			font-size: 32rpx;
			color: #333333;
			font-family: PingFang HK;
		}
	}
</style>
