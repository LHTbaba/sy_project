<template name='sy'>
	<view class="content" style="background-color: #fff;">
		<view class="wrap" id='wrap' style="position: relative;background: #fff;height: 100vh;">
			<uni-header :title='title' id='header'>
				<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
			</uni-header>
			<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
				<view class="report_list">
					<view class="report_item" style="display: block;height: auto;padding-bottom: 0px; ">
						 
						<view class="textArea_box">
							<textarea style="width: 100%;height: 200rpx;border: none;font-size: 30rpx;" maxlength="200" placeholder="请输入反馈内容"
							 v-model="textArea"></textarea>
							<view class="" style="text-align: right;font-size: 24rpx;color: #999;padding-right: 10rpx;margin-bottom: 10rpx;">
								{{textArea.length}}/200
							</view>
						</view> 
					</view>
					<view class="report_item" style="display: block;height: auto; ">
						<view class="report_h3">
							反馈人姓名:<text style="color: red;margin: 0px 5px;">*</text>
						</view>   
						<view class="ipt_choose" style="padding-left: 20rpx;height: 90rpx;box-sizing: border-box;border: 1px solid #efefef;border-radius: 6rpx;">
							<input type="text" v-model="name" placeholder="请输入反馈人姓名"  style="width: 100%;height: 100%;border: none;font-size: 30rpx;"/>
						</view>   
					</view>
					<view class="report_item" style="display: block;height: auto; ">
						<view class="report_h3">
							联系方式:<text style="color: red;margin: 0px 5px;">*</text>
						</view>   
						<view class="ipt_choose" style="padding-left: 20rpx;height: 90rpx;box-sizing: border-box;border: 1px solid #efefef;border-radius: 6rpx;">
							<input type="text" v-model="phone" value="" placeholder="请输入电话号码"  style="width: 100%;height: 100%;border: none;font-size: 30rpx;"/>
						</view>   
					</view>
					<view class="page_box" id="page_box">
						<view class="prev_text"   @click="subForm()">提交</view> 
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import config from "../../config.js";
	var landlinePtn = /^[0][1-9]{2,3}[0-9]{5,10}$/;
	var regs = /^1[345789]\d{9}$/;
	export default {
		name: 'sy',
		props: {

		},
		data() {
			return {
				barheight: '',
				scrollerHeight: "",
				title: '意见反馈',
				isMore: false,
				noMore: false,
				pageNum: 1,
				pageSize: 15,
				userId: "",
				textArea: '',
				refresherTriggered: false,
				_refresherTriggered: false,
				msgList: [],
				whlbIndex: 0,
				keyWord: '',
				name:"",
				phone:"",
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
			 
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			_this.getHeight(); 
			// _this.getzcwh();
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
			 
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			subForm(){
				//联系电话
				if (regs.test(this.phone) || landlinePtn.test(this.phone)) {
				
				} else {
					this.$toast('电话号码错误');
					return false
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

	.textArea_box {
		width: 100%;
		border-radius: 6rpx;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid #E0E6E6;
		box-sizing: border-box;
		padding-top: 20rpx;
		padding-left: 20rpx;
		margin: 20rpx 0px;
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

	.page_box { 
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx 40rpx;
		background: #fff;
		font-size: 30rpx;
		display: flex;
		bottom: 60rpx;

		.prev_text {
			flex: 1; 
			background: #46A496;
			display: flex;
			color: #fff;
			height: 88rpx;
			justify-content: center;
			align-items: center;
		}

		.next_text {
			flex: 1;
			background: rgb(11, 176, 127);
			display: flex;
			color: #fff;
			height: 88rpx;
			justify-content: center;
			align-items: center;
		}
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

	.report_list {
		background: #fafafa;
		.report_item {
			padding: 0rpx 40rpx 30rpx 40rpx;
			margin-bottom: 20rpx;
			overflow: hidden;
			background: #ffffff;

			.report_h3 {
				font-size: 32rpx;
				padding: 20rpx 0px;
				color: #424242;
			}

			.report_ipt {
				height: 84rpx;
				margin-left: 0px;
				font-size: 30rpx;
				width: 100%;
				padding-left: 10rpx;
				box-sizing: border-box;
				background: #ffffff;
				font-size: 30rpx;
				border: 1px solid #e0e5e6;
				border-radius: 3px;
			}
		}

		#zpyyTextArea {
			height: 90rpx;
			margin-left: 0px;
			font-size: 28rpx;
			width: 100%;
			padding-left: 10rpx;
			border: 1px solid #e0e5e6;
			border-radius: 3px;
			box-sizing: border-box;
			background: #ffffff;
		}
	}
</style>
