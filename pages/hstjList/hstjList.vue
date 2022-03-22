<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
		<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header> 
		<scroll-view :style="{height:scrollerHeight}" scroll-y="auto">
			<view class="main"> 
				<view class="zfsb_box" @click="hsnhsbtj()">
					<view class="tabview_left">
						<image src="../../static/img/dsrtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">省平台农户申报</text>
							<text class="hui_title">省平台农户申报统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="hsgbzftj()">
					<view class="tabview_left">
						<image src="../../static/img/rhhsgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">省平台干部走访 </text>
							<text class="hui_title">省平台干部走访统计</text>
						</view>
					</view>
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="hsstjhtj()">
					<view class="tabview_left">
						<image src="../../static/img/jcnhgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">省厅数据交换 </text>
							<text class="hui_title">省厅数据交换统计</text>
						</view>
					</view>
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view> 
				<view class="zfsb_box" @click="bdgbzf()">
					<view class="tabview_left">
						<image src="../../static/img/rhhsgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">本地干部走访 </text>
							<text class="hui_title">本地干部走访统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="hssjjhtj()">
					<view class="tabview_left">
						<image src="../../static/img/dsrtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">本地数据交换 </text>
							<text class="hui_title">本地数据交换统计</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="hshstj()">
					<view class="tabview_left">
						<image src="../../static/img/rhhsgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">核实统计 </text>
							<text class="hui_title">核实人走访上报统计</text>
						</view>
					</view> 
					<view class="tabview_right"> 
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="hsfltj()">
					<view class="tabview_left">
						<image src="../../static/img/jcnhgx.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">分类统计</text>
							<text class="hui_title">防返贫人口分类统计</text>
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
			hsnhsbtj(){
				uni.navigateTo({
					url: '../webview/webview?type=hsnhsbtj'
				})
			},
			hsgbzftj(){
				uni.navigateTo({
					url: '../webview/webview?type=hsgbzftj'
				})
			},
			hsstjhtj(){
				uni.navigateTo({
					url: '../webview/webview?type=hsstjhtj'
				})
			},
			hssjjhtj(){
				uni.navigateTo({
					url: '../webview/webview?type=hssjjhtj'
				})
			},
			bdgbzf(){
				uni.navigateTo({
					url: '../webview/webview?type=bdgbzf'
				})
			},
			hshstj(){
				uni.navigateTo({
					url: '../webview/webview?type=hshstj'
				})
			},
			hsfltj(){
				uni.navigateTo({
					url: '../webview/webview?type=hsfltj'
				})
			},
			 
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
