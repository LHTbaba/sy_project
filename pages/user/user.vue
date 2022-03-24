<template name='sy'>
	<view class="content">
		<view class="wrap" id='wrap' style="position: relative;background: #F8F8F8;">
			<uni-header id='header' :title='title'>
				<!-- <icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx; " @click="back"></icon> -->
			</uni-header>
			<scroll-view :style="{height:scrollerHeight}" scroll-y="true">
			    <view class="user_box">
			    	<view class="user_left">
			    		<image src="../../static/img/wode.png" style="width: 100rpx;height: 100rpx;margin-right: 20rpx;" mode=""></image>
						<view class="user_name">
							<view class="name_h3">
								{{username}}
							</view>
							<text class="hui_name" style="color: rgba(255, 255, 255,.8);font-size: 28rpx;">账号名称</text>
						</view>
			    	</view>
					<text class="user_right" @click="toLogin()">
						切换账号
					</text>
			    </view>
				<!-- <view class="msg_box">
					<view class="msg_list">
						<view class="msg_item">
							<view class="msg_num" style="color: linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);">
								2
							</view>
							<text class="msg_hui">待办任务</text>
						</view>
						<view class="msg_item">
							<view class="msg_num" style="color: rgb(37, 183, 110);">
								2
							</view>
							<text class="msg_hui">已办任务</text>
						</view>
						<view class="msg_item">
							<view class="msg_num" style="color: rgb(231, 98, 75);">
								2
							</view>
							<text class="msg_hui">超时完成</text>
						</view>
					</view>
				</view> -->
				<view class="user_list">
					<!-- <view class="list_h3">
						基础功能
					</view> -->
					<view class="user_card" @click="loginOut()">
						<view class="user_card_left">
							<image src="../../static/img/jiebang.png" style="width: 32rpx;height: 32rpx;margin-right: 20rpx;" mode=""></image>微信解绑
						</view>
						<view class="user_card_right">
							<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 32rpx;transform: rotate(180deg);color: #9E9FA4;margin-top: 20rpx;"></icon>
						</view>
					</view>
					<view class="user_card" @click="jszc()">
						<view class="user_card_left">
							<image src="../../static/img/jishuzhichi.png" style="width: 32rpx;height: 32rpx;margin-right: 20rpx;" mode=""></image>技术支持
						</view>
						<view class="user_card_right">
							<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 32rpx;transform: rotate(180deg);color: #9E9FA4;margin-top: 20rpx;"></icon>
						</view>
					</view>
					<view class="user_card" @click="yjfk()">
						<view class="user_card_left">
							<image src="../../static/img/yijian.png" style="width: 32rpx;height: 32rpx;margin-right: 20rpx;" mode=""></image>意见反馈
						</view>
						<view class="user_card_right">
							<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 32rpx;transform: rotate(180deg);color: #9E9FA4;margin-top: 20rpx;"></icon>
						</view>
					</view>
					<view class="user_card" @click="aboutUs()">
						<view class="user_card_left">
							<image src="../../static/img/guanyu.png" style="width: 32rpx;height: 32rpx;margin-right: 20rpx;" mode=""></image>关于我们
						</view>
						<view class="user_card_right">
							<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 32rpx;transform: rotate(180deg);color: #9E9FA4;margin-top: 20rpx;"></icon>
						</view>
					</view> 
					<!-- <view class="user_card">
						<view class="user_card_left">
							您的消息提醒还剩<text style="color: #ED6A5E;">{{nums}}</text>条
						</view>
						<view class="user_card_right">
							<text class="dyBtn" @click="addDy">订阅</text>
						</view>
					</view> -->
				</view> 
			</scroll-view>
			<view class="tabber" id="tabber">
				<view class="tabber_item" @click="toHome()">
					<image src="../../static/img/home.png" style="width: 45rpx;height: 45rpx;" class="tabber_icon" mode=""></image>
					<text class="tabber_text">首页</text>
				</view>
				<view class="tabber_item">
					<image src="../../static/img/user.png" class="tabber_icon" mode=""></image>
					<text class="tabber_text">我的</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'sy',
		props: {

		},
		data() {
			return {
				barheight: '',
				scrollerHeight: "",
				title: '我的',
				zhName: '',
				phone: '',
				nums: 0,
				openId: '',
				userId: "",
				username:""
			};
		},
		onLoad() {
			this.$hideLoading();
			this.username=uni.getStorageSync('zhName');
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			this.zhName = uni.getStorageSync('zhName');
			console.log(this.$store.state.phone);
			if (uni.getStorageSync('phone') == 'null') {
				this.phone = '无';
			} else {
				this.phone = this.$store.state.phone;
			};
			this.openId = uni.getStorageSync('openId');
			this.userId = uni.getStorageSync('userId');
			this.nums = uni.getStorageSync('dyNums') == 'null' ? 0 : uni.getStorageSync('dyNums');
			_this.getHeight();
			// _this.getDy();
		},
		methods: {
			toHome(){
				uni.redirectTo({
					url:'../index/index'
				})
			},
			toLogin(){
				uni.navigateTo({
					url:'../login/login'
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
						_this.scrollerHeight = _this.scrollerHeight - data.height;
					}).exec();
				})
				_this.$nextTick(function() {
					query.select('#tabber').boundingClientRect(data => {
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				})
			},
			getDy() {
				var _this = this;
				this.$api.getdyNums({
					"cmd.QOPENID": _this.openId
				}).then(res => {
					console.log(res);
					_this.nums = res[0].TSCS;
				}).catch(err => {

				})
			},
			addDy() {
				this.openDY();
			},
			dyNums() {
				var _this = this;
				this.$api.dyNums({
					'cmd.OPENID': this.openId,
					'cmd.USERID': this.userId
				}).then(res => {
					//console.log(res);
					if (res[0].SUCCESS == '1') {
						_this.nums = res[0].RENUM;
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
								let moIdState = res.subscriptionsSetting.itemSettings['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg']; // 用户同意的消息模板id
								if (moIdState === 'accept') {
									console.log('接受了消息推送');
									wx.requestSubscribeMessage({ // 调起消息订阅界面
										tmplIds: ['WGGvBU1BIjHgTgm4ZuwaNJJe6IKQoinhkrI-ifPqGBg'],
										success(res) {
											console.log('订阅消息 成功 ');
											console.log(res);
											_this.dyNums();
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
													_this.dyNums();
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
			changePsw() {
				uni.navigateTo({
					url: '/pages/pswUpdate/pswUpdate',
				});
			},
			aboutUs() {
				uni.navigateTo({
					url: '/pages/aboutUs/aboutUs',
				});
			},
			back() {
				uni.navigateBack()
			},
			changeZh() {
				uni.showModal({
					content: '确定要切换账号吗？',
					success: function(res) {
						if (res.confirm) {
							uni.reLaunch({
								url: '/pages/login/login',
							});
						} else if (res.cancel) {

						}
					}
				});
			},
			jszc(){
				uni.navigateTo({
					url:'../kefu/kefu'
				});
				// uni.showModal({
				// 	content: '功能正在开发中',
				// 	success: function(res) {
				// 		if (res.confirm) {
							
				// 		}
				// 	},
				// })	
			},
			yjfk(){
				uni.navigateTo({
					url:'../fankui/fankui'
				});
				// uni.showModal({
				// 	content: '功能正在开发中',
				// 	success: function(res) {
				// 		if (res.confirm) {
							
				// 		}
				// 	},
				// })	
			},
			loginOut() {
				//uni.removeStorageSync('openId');
				var userId = uni.getStorageSync('userId');
				var openId = uni.getStorageSync('openId');
				var _this = this;
				uni.showModal({
					content: '确定要解绑账号吗？',
					success: function(res) {
						if (res.confirm) {
							_this.$api.jbOpenid({
								'cmd.OPENID': openId,
								"cmd.USER_ID": userId
							}).then(res => {
								console.log(res);
								if (res[0].TIPS == '1') {
									_this.$toast(res[0].SUCESS);
									uni.removeStorageSync('sessionId');
									uni.removeStorageSync('nickName');
									uni.removeStorageSync('avatarUrl');
									uni.removeStorageSync('openId');
									uni.removeStorageSync('cardBool');
									setTimeout(function() {
										uni.reLaunch({
											url: '/pages/login/login',
										});
									}, 1000)
								}
							}).catch(err => {
								console.log(err)
							})
						}else if (res.cancel) {
				
						}
					},
				})	
				

			}
		}
	}
</script>

<style lang="scss" scoped>
	::-webkit-scrollbar {
		display: none;
	}
     .user_box{
		 padding: 50rpx 30rpx 30rpx 30rpx;
		 background: linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);
		 display: flex;
		 justify-content: space-between;
		 align-items: center;
		 .user_left{
			 display: flex; 
			 align-items: center;
		 }
		 .user_name{
			 .name_h3{
				 font-size: 40rpx;
				 // margin-bottom: 10rpx;
				 color: #fff;
				 font-weight: bold;
			 }
		 }
		 .user_right{
			 display: inline-block;
			 height: 66rpx;
			 line-height: 66rpx;
			 border-radius: 30rpx;
			 padding: 0px 20rpx;
			 font-size: 30rpx;
			 color: #fff;
			 background: #F8C55E;
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
	 .msg_box{
		 padding: 0px 30rpx;
		  margin-top: -110rpx; 
		 
		 .msg_list{
			padding: 30rpx;
			border-radius: 12rpx;
			box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
			display: flex;
			background: #fff;
			align-items: center;
			 .msg_item{
				width: calc((100% - 20rpx) / 3);
				height: 160rpx;
				 display: flex;
				 background: rgb(248, 249, 253);
				 justify-content: center;
				 align-items: center;
				 margin-right: 10rpx;
				 flex-direction: column;
				 &:last-child{
					 margin-right: 0px;
				 }
				 .msg_num{
					 font-size: 36rpx;
					 font-weight: bold;
					 margin-bottom: 20rpx;
				 }
				 .msg_hui{
					 color: rgb(162, 174, 191);
					 font-size: 28rpx;
				 }
			 }
		 }
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
			background: #f7f7f7;

			.admin_box {
				width: 100%;
				box-sizing: border-box;
				padding: 0px 30rpx;
				background: #2151F4;
				height: 120rpx;
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
					font-size: 28rpx;
					color: #fff;
					opacity: .8;
				}
			}

			.list_card {
				padding: 30rpx;
				background: #f6f5f5;
			}

			.img_title {
				width: 100%;
				height: 300rpx;
				overflow: hidden;
				margin-bottom: 30rpx;
				border-radius: 16rpx;
				overflow: hidden;
				box-shadow: 0px 2px 4px 0px rgba(37, 49, 227, 0.2);
			}

			.nums_list {
				width: 100%;
				height: 180rpx;
				display: flex;
				box-shadow: 0px 2px 4px 0px rgba(37, 49, 227, 0.2);
				border-radius: 16rpx;
				margin-bottom: 30rpx;
				background: #fff;

				.nums_item {
					flex: 1;
					height: 100%;
					display: flex;
					justify-content: center;
					border-right: 1px solid #dfdfdf;
					flex-direction: column;
					align-items: center;

					&:last-child {
						border-right: none;
					}

					.strong_nums {
						font-family: Rubik;
						font-weight: bold;
						font-size: 36rpx;
						margin-bottom: 20rpx;
					}

					.nums_text {
						color: #9E9FA4;
						font-family: Source Han Sans CN;
						font-size: 24rpx;
					}
				}

				;

			}

			.page_item {
				width: 100%;
				height: 180rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 30rpx;
				box-shadow: 0px 2px 4px 0px rgba(37, 49, 227, 0.2);
				border-radius: 16rpx;
				margin-bottom: 30rpx;
				background: #fff;

				.page_item_left {
					height: 100%;
					display: flex;
					align-items: center;

					.img_right {
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;

						.title_top {
							margin-bottom: 10rpx;

							.title_top_strong {
								font-size: 36rpx;
								color: #2D3639;
								margin-right: 20rpx;
								font-family: Source Han Sans CN;
							}

							.dk_text {
								font-size: 24rpx;
								font-family: Source Han Sans CN;
								color: rgba(42, 96, 247, 0.6);
							}
						}

						.title_bottom {
							color: #526267;
							font-size: 28rpx;
						}
					}
				}

				.page_item_right {
					color: #2A60F7;
					font-size: 30rpx;
					font-weight: bold;
				}
			}

		}

		.dyBtn {
			display: inline-block;
			padding: 4rpx 12rpx;
			text-align: center;
			line-height: 52rpx;
			color: #fff;
			background: #ED6A5E;
			border-radius: 6rpx;
			font-size: 32rpx;
		}

		.user_list {
			width: 100%;
			background: #fff;
			// margin-top: 40rpx;
			 margin-bottom: 30rpx;
			.list_h3{
				height: 112rpx;
				font-size: 32rpx;
				padding-left: 30rpx;
				line-height: 100rpx;
				color: rgb(38, 51, 67);
			}
			.user_card {
				padding: 0px 30rpx;
				background: #fff; 
				height: 112rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
                 box-shadow: 0px -0.5px rgba(243, 244, 246, 1) inset;
				.user_card_left {
					height: 100%;
					display: flex;
					align-items: center;
					color: #2D3639;
					font-family: Source Han Sans CN;
					font-size: 32rpx;
				}

				.user_card_right {
					height: 100%;
					display: flex;
					align-items: center;
				}


			}

			.tcBtn {
				margin: 60rpx 30rpx 30rpx 30rpx;
				width: calc(100% - 60rpx);
				height: 100rpx;
				border-radius: 16rpx;
				background: #2151F4;
				text-align: center;
				line-height: 100rpx;
				color: #fff;
				font-size: 32rpx;
			}
		}


	}
</style>
