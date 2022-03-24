<template name='sy'>
	<view class="content">
		<view class="wrap" id='wrap' style="position: relative;background: #F8F8F8;">
			<uni-header id='header' :title='title'>
				<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;color: #FFF;"  @click="back"></icon>
			</uni-header>
			<scroll-view :style="{height:scrollerHeight}">
				<view class="content-about">
					<view style="text-align: center">
						<image src="../../static/img/fp_title.png" mode="" style="width: 200rpx;height: 200rpx;"></image>
						<p style="font-size: 36rpx; color: #263343; font-weight: bold; line-height: 80rpx">防返贫监测</p>
						<p style="color: #7D8288">版本号：syfpjc 1.0.0</p>
					</view>
					<view style="text-align: center;font-size:18.5rpx">
						<p style="color: #A2AEBF">江西睿讯科技有限公司   版权所有</p>
						<p style="color: #A2AEBF">Copyright © 2021-2031 Tencent. All Rights Reserved</p>
					</view>
				</view>
			</scroll-view>
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
				title: '关于我们',
			};
		},
		onLoad() {
			this.$hideLoading()
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
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
			changePsw(){
				uni.navigateTo({
					url: '/pages/pswUpdate/pswUpdate',
				}) ;
			},
			back(){
				uni.navigateBack()
			},
			loginOut(){
				uni.reLaunch({
					url: '/pages/login/login',
				}) ;
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
					font-size: 24rpx;
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
			.page_item{
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
				.page_item_left{
					height: 100%;
					display: flex;
					align-items: center;
					.img_right{
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.title_top{
							margin-bottom: 10rpx;
							.title_top_strong{
								font-size: 36rpx;
								color: #2D3639;
								margin-right: 20rpx;
								font-family: Source Han Sans CN;
							}
							.dk_text{
								font-size: 24rpx;
								font-family: Source Han Sans CN;
								color: rgba(42,96,247,0.6);
							}
						}
						.title_bottom{
							color: #526267;
							font-size: 28rpx;
						}
					}
				}
				.page_item_right{
					color: #2A60F7;
					font-size: 30rpx;
					font-weight: bold;
				}
			}

		}
		.user_list{
			width: 100%;
			margin-bottom: 50rpx;
			.user_card{
				padding: 0px 30rpx;
				background: #fff;
				margin-top: 30rpx;
				height: 112rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.user_card_left{
					height: 100%;
					display: flex;
					align-items: center;
					color: #2D3639;
					font-family: Source Han Sans CN; 
					font-size: 32rpx;
				}
				.user_card_right{
					height: 100%;
					display: flex;
					align-items: center; 
				}
				
					
			}
			.tcBtn{
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
		
		.content-about {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-content: center;
		}
	}
</style>
