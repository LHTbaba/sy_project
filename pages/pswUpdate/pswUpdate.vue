<template name='sy'>
	<view class="content">
		<view class="wrap" id='wrap' style="position: relative;background: #fff;">
			<uni-header id='header' :title='title'>
				<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;" @click="back"></icon>
			</uni-header>
			<scroll-view :style="{height:scrollerHeight}">
				<view class="main_text">
					<view class="psw_item">
						<view class="psw_label">
							旧密码
						</view>
						<view class="psw_ipt">
							<input type="text" value="" v-model="oldPwd" placeholder="输入旧密码" />
						</view>
					</view>
					<view class="psw_item">
						<view class="psw_label">
							新密码
						</view>
						<view class="psw_ipt">
							<input type="text" value="" v-model="newPwd" placeholder="输入新密码" />
						</view>
					</view>
					<view class="psw_item">
						<view class="psw_label">
							确认密码
						</view>
						<view class="psw_ipt">
							<input type="text" value="" v-model="qrPwd" placeholder="确认新密码" />
						</view>
					</view>
					<view class="tips_text">
						密码是6-20个字符之间，至少包含英文字母、数字、标点符号（除空格）中的两种
					</view>
					<view class="tcBtn" @click="subForm()">
						确认
					</view>
				</view>

			</scroll-view>
		</view>
	</view>
</template>
<script>
	var reg = new RegExp(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/);
	export default {
		name: 'sy',
		props: {

		},
		data() {
			return {
				barheight: '',
				scrollerHeight: "",
				title: '修改登录密码',
				oldPwd: "",
				newPwd: "",
				qrPwd: "",
				openId: "",
				userId: ""

			};
		},
		onLoad() {
			this.$hideLoading()
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			this.userId = uni.getStorageSync('userId');
			this.openId = uni.getStorageSync('openId');
			// this.oldPwd=uni.getStorageSync('passWord');
			_this.getHeight();
		},
		methods: {
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
				})
			},
			back() {
				uni.navigateBack()
			},
			subForm() {
				if (this.oldPwd == "" || this.oldPwd == null) {
					this.$toast('请输入原密码');
					return false
				};
				if (this.newPwd == "" || this.newPwd == null) {
					this.$toast('请输入新密码');
					return false
				};
				if (this.qrPwd == "" || this.qrPwd == null) {
					this.$toast('请输入确认密码');
					return false
				};
				if (!reg.test(this.newPwd)) {
					this.$toast('请输入正确的密码格式');
					return false
				};
				if (this.newPwd != this.qrPwd) {
					this.$toast('确认密码和新密码不一致');
					return false
				};
				var _this = this;
				uni.showLoading();
				this.$api.updatePwd({
					"cmd.USERID": _this.userId,
					"cmd.OLDPWD": _this.oldPwd,
					"cmd.NEWPWD": _this.newPwd,
				}).then(res => {
					uni.hideLoading();
					if (res[0].OCODE == '0') {
						_this.$toast(res[0].ORES);
						// uni.setStorageSync('isLogin',false);
						_this.$api.jbOpenid({
							'cmd.OPENID': _this.openId,
							"cmd.USERID": _this.userId
						}).then(res => {
							console.log(res);
							if (res[0].TIPS == '1') {
								// _this.$toast(res[0].SUCESS);
								uni.removeStorageSync('sessionId');
								uni.removeStorageSync('nickName');
								uni.removeStorageSync('avatarUrl');
								uni.removeStorageSync('openId');
								uni.removeStorageSync('cardBool');
								uni.setStorageSync('passWord','');
								// uni.removeStorageSync('userId');
								setTimeout(function() {
									uni.reLaunch({
										url: '/pages/login/login',
									});
								}, 1000)
							} else {
								_this.$toast(res[0].SUCESS)
							}
						}).catch(err => {
							console.log(err)
						})
						// setTimeout(function(){
						// 	uni.reLaunch({
						// 		url: '/pages/login/login',
						// 	});
						// },1000)
					} else {
						_this.$toast(res[0].ORES);
					}
					console.log(res)
				}).catch(err => {
					uni.hideLoading();
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	::-webkit-scrollbar {
		display: none;
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
			background: #fff;


			.tcBtn {
				margin: 0rpx 0rpx 30rpx 0rpx;
				width: 100%;
				height: 100rpx;
				background: #2151F4;
				text-align: center;
				line-height: 100rpx;
				color: #fff;
				font-size: 32rpx;
			}
		}


	}

	.main_text {
		padding: 0px 30rpx;

		.psw_item {
			width: 100%;
			height: 112rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
			box-shadow: 0px 1px 0px #dfdfdf;
			color: #000;

			.psw_label {
				width: 140rpx;
				height: 100%;
				display: flex;
				align-items: center;
				text-align: left;
				font-family: Source Han Sans CN;
				font-size: 30rpx;
			}

			.psw_ipt {
				flex: 1;
				height: 100%;
				box-sizing: border-box;

				input {
					width: 100%;
					height: 100%;
					text-align: left;
					font-size: 30rpx;

				}
			}
		}
	}

	.tips_text {
		font-size: 24rpx;
		color: rgba(158, 159, 164, 0.8);
		padding: 20rpx 0px;
		text-align: left;
	}
</style>
