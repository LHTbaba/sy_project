<template>
	<view class="" style="background: #fff;width: 100vw;height: 100vh;" id="wrap">
		<uni-header id='header' :title="title">
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header> 
		<scroll-view :style="{height:scrollerHeight}" scroll-y="auto">
			<view class="main" style="background: #fff;"> 
				<view class="zfsb_box" @click="sjhs()">
					<view class="tabview_left">
						<image src="../../static/img/sbtj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">(省级)入户核实</text>
							<text class="hui_title">省级平台下发核实农户</text>
						</view>
					</view>
					<view class="tabview_right">
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				<view class="zfsb_box" @click="xjhs()">
					<view class="tabview_left">
						<image src="../../static/img/hstj.png" style="width: 100rpx;height: 100rpx;margin-right: 26rpx;"></image>
						<view class="tab_left">
							<text class="strong_title">(县级)入户核实</text>
							<text class="hui_title">县级平台下发核实农户</text>
						</view>
					</view>
					<view class="tabview_right">
						<!-- <text class="sh_num" v-if="shNums>0">{{shNums}}</text> -->
						<image src="../../static/img/icons-arrow.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				 
			</view>

		</scroll-view>
		  
	</view>


</template>

<script>
	import config from "../../config.js";
	import storage from "../../static/js/storage.js"
	export default {
		data() {
			return {
				title: '入户核实', 
				shNums: 1,
				citydata:"",
				weather:'',
				scrollerHeight: '', //路径点集合 
			}
		},
		onShow() {
		    
		},
		onLoad() {
			var _this = this;  
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
			sjhs() {
				uni.navigateTo({
					url: '../webview/webview?type=sjhs'
				})
			},
			xjhs() {
				uni.navigateTo({
					url: '../webview/webview?type=xjhs'
				})
			}, 
		}
	}
</script>

<style scoped lang="scss">
	.menu_h3{
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
    .tabber{
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
	.tj_title {
		padding-left: 30rpx;
		line-height: 100rpx;
		font-size: 32rpx;
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
			}

			;
			width: calc((100% - 30rpx) / 2);

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
				font-size: 24rpx;
			}

			.bottom_bg {
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				bottom: 30rpx;
				right: 30rpx;
			}
		}

		.menu_item1 {
			background: rgba(250, 251, 255, 1);

			.menu_top {
				color: rgb(22, 41, 119);
			}
		}

		.menu_item2 {
			background: rgb(247, 253, 253);

			.menu_top {
				color: rgb(63, 109, 109);
			}
		}

		.menu_item3 {
			background: rgb(251, 251, 239);

			.menu_top {
				color: rgb(101, 101, 35);
			}
		}

		.menu_item4 {
			background: rgb(255, 249, 249);

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
