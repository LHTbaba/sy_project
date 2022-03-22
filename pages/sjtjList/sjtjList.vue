<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
		<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header> 
		<scroll-view :style="{height:scrollerHeight}" scroll-y="auto">
			<view class="main"> 
				<view class="zfsb_box" @click="sRjdtj()">
					<view class="tabview_left">
						<image src="../../static/img/dsrtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">进度统计</text>
							<text class="hui_title">进度统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="sRrjggtj()">
					<view class="tabview_left">
						<image src="../../static/img/rhhsgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">人均纯收入过高</text>
							<text class="hui_title">人均纯收入过高统计</text>
						</view>
					</view>
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="sRrjgdtj()">
					<view class="tabview_left">
						<image src="../../static/img/jcnhgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">人均纯收入过低</text>
							<text class="hui_title">人均纯收入过低统计</text>
						</view>
					</view>
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view> 
				<view class="zfsb_box" @click="sRgxggtj()">
					<view class="tabview_left">
						<image src="../../static/img/dsrtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">累计大额刚性支出过高</text>
							<text class="hui_title">累计大额刚性支出过高统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="sRsrwltj()">
					<view class="tabview_left">
						<image src="../../static/img/rhhsgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">人均纯收入为0，为负数</text>
							<text class="hui_title">人均纯收入为0，为负数统计</text>
						</view>
					</view>
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="sRzbfxtj()">
					<view class="tabview_left">
						<image src="../../static/img/jcnhgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">年收入占比分析</text>
							<text class="hui_title">年收入占比分析统计</text>
						</view>
					</view>
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view> 
				<view class="zfsb_box" @click="sRsnxbtj()">
					<view class="tabview_left">
						<image src="../../static/img/dsrtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">与上一年度相比</text>
							<text class="hui_title">与上一年度相比统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view> 
			</view>

		</scroll-view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				title: '数据统计',
				zhName: "于都县",
				shNums: 1,
				scrollerHeight: '', //路径点集合 
			}
		},
		onLoad() {

		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			console.log(this.openId);
			_this.getHeight();
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
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
			sRjdtj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRjdtj'
				})
			},
			sRrjggtj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRrjggtj'
				})
			},
			sRrjgdtj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRrjgdtj'
				})
			},
			sRgxggtj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRgxggtj'
				})
			},
			sRsrwltj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRsrwltj'
				})
			},
			sRzbfxtj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRzbfxtj'
				})
			},
			sRsnxbtj(){
				uni.navigateTo({
					url: '../webview/webview?type=sRsnxbtj'
				})
			},
			// sRrjggtj(){
			// 	uni.navigateTo({
			// 		url: '../webview/webview?type=sRjdtj'
			// 	})
			// },
			// sRjcsjtj(){
			// 	uni.navigateTo({
			// 		url: '../webview/webview?type=sRjdtj'
			// 	})
			// },
			// sRxffptj(){
			// 	uni.navigateTo({
			// 		url: '../webview/webview?type=sRjdtj'
			// 	})
			// },
		}
	}
</script>

<style scoped lang="scss">
	.sh_num {
		padding: 4rpx 12rpx;
		background: #ff4100;
		border-radius: 50rpx;
		color: #fff;
		margin-left: 10rpx;
		font-size: 26rpx;
	}

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
						font-size: 28rpx;
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
