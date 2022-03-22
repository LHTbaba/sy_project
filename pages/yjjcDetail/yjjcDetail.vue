<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
			<!-- <view class="gs_title">
				<view class="gs_status">
					入户核实通过
				</view>
				<text style="color:#fff;opacity: .8; font-size: 25rpx;">当前进度</text>
			</view> -->
			<view class="xd_box">
				<view class="xd_left">
					<view class="xd_top">
						<view class="xd_h3">
							张小琴
						</view>
						<text class="xd_type">脱贫户</text>
					</view>
					<view class="xd_id">
						证号：347748488449949
					</view>
					<view class="xd_bottom">
						<text class="local_icon"></text>吉安市<text class="xd_line">|</text>临川区<text class="xd_line">|</text>李家村
					</view>
				</view>
				<view class="xd_right">
					<image src="../../static/img/dcsp.png" mode="" style="width: 140rpx;height: 140rpx;"></image>
				</view>
			</view>
			<view class="table">
				<view class="table_tr">
					<view class="td_bg">
						申请年度：
					</view>
					<view class="td_right">
						2021年
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						家庭人口数：
					</view>
					<view class="td_right">
						6人
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						联系电话：
					</view>
					<view class="td_right">
						18679652212
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">近一年家庭年均收入：
					</view>
					<view class="td_right">
						2371元
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">申请帮扶原因：
					</view>
					<view class="td_right">
						因大病-因残
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">是否同意授权：
					</view>
					<view class="td_right">
						是
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">授权签名：
					</view>
					<view class="td_right">
						是
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">致贫事项描述：
					</view>
					<view class="td_right">
						村里洪水泛滥成灾，房屋不幸倒塌，特此求助！
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">佐证材料：
					</view>
					<view class="td_right">
						村里洪水泛滥成灾，房屋不幸倒塌，特此求助！
					</view>
				</view>
			</view>
			<view class="farm_detail">
				家庭成员信息
			</view>
			<view class="family_list">
				<view class="family_item">
					<view class="family_left">
						<view class="">
							<text class="strong_title">一般农户1</text>
							<text class="condition_span">户主</text>
						</view>
						<view class="id_text">
							身份证&nbsp;360112******4691
						</view>
					</view>
				</view>
				<view class="family_item">
					<view class="family_left">
						<view class="">
							<text class="strong_title">一般农户1</text>
							<text class="condition_span">户主</text>
						</view>
						<view class="id_text">
							身份证&nbsp;360112******4691
						</view>
					</view>
				</view>
			</view>
			<view class="jd_list" style="position: relative;">
				<view class="jd_item">
					<view class="jd_item_left">
						<text class="right_icon"></text>
					</view>
					<view class="jd_item_right">
						<view class="h3_jd">
							入户预核实
							<text class="time_tips">2021-06-25 17:54:55</text>
						</view>
						<view class="dl_txt">
							核查干部：<text class="strong_dl">白田村委会</text>
						</view>
						<view class="dl_txt">
							核查内容：<text class="strong_dl">123</text>
						</view>
						<view class="dl_txt">
							核查附件
						</view>
						<view class="hc_list">
							<!-- <view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view>
							<view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view>
							<view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view> -->
						</view>
					</view>
				</view>
				<view class="jd_item">
					<view class="jd_item_left">
						<text class="right_icon"></text>
					</view>
					<view class="jd_item_right">
						<view class="h3_jd">
							已上报
							<text class="time_tips">2021-06-25 17:54:55</text>
						</view>
						<view class="dl_txt">
							核查干部：<text class="strong_dl">白田村委会</text>
						</view>
						<view class="dl_txt">
							核查内容：<text class="strong_dl">123</text>
						</view>
						<view class="dl_txt">
							核查附件
						</view>
						<view class="hc_list">
							<!-- <view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view> -->
						</view>
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
				title: '预警详情',
				reNum: 0,
				isMore: false,
				noMore: false,
				pageNum: 1,
				pageSize: 15,
				refresherTriggered: false,
				_refresherTriggered: false,
				retext: '待核查',
				barList: ['待核查', '已核查'],
				tabIndex: 0,

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
			back() {
				uni.navigateBack({
					delta: 1
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.table {
		width: 100%;
		background: #fff;
		border-top: 1px solid rgb(232, 236, 238);

		.table_tr {
			width: 100%;
			box-sizing: border-box;
			height: auto;
			display: flex;
			font-size: 30rpx;
			border-bottom: 1px solid rgb(232, 236, 238);

			.td_bg {
				width: 40%;
				height: 100rpx;
				display: flex;
				align-items: center;
				padding-left: 30rpx;
				justify-content: flex-end;
				box-sizing: border-box;
				text-align: center;
				color: rgb(125, 130, 136);
				background: rgba(248, 249, 253, 1);
				border-right: 1px solid rgb(232, 236, 238);
			}

			.td_right {
				width: 60%;
				display: flex;
				color: rgb(38, 51, 67);
				align-items: center;
				justify-content: flex-start;
				height: 100rpx;
				box-sizing: border-box;
				padding-left: 30rpx;
			}
		}
	}

	.xd_box {
		padding: 30rpx;
		display: flex;
		background: #fff;
		align-items: center;
		justify-content: space-between;

		.xd_left {
			line-height: 70rpx;

			.xd_top {
				display: flex;
				align-items: center;
			}

			.xd_type {
				height: 50rpx;
				line-height: 50rpx;
				padding: 0px 10rpx;
				font-size: 28rpx;
				border-radius: 4rpx;
				color: #25b76e;
				background: #fafafa;
			}

			.xd_bottom {
				display: flex;
				align-items: center;
				color: rgb(162, 174, 191);
				font-size: 30rpx;

				.xd_line {
					margin: 0px 10rpx;
				}
			}

			.xd_id {
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				padding: 0px 10rpx;
				border-radius: 4rpx;
				font-size: 28rpx;
				color: #3b8ff2;
				background: rgba(59, 143, 242, 0.1);
			}

			.xd_h3 {
				font-size: 36rpx;
				color: rgb(38, 51, 67);
				margin-right: 20rpx;
			}
		}
	}

	.local_icon {
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		margin-right: 6rpx;
		// background: url(../../static/img/address.png) center no-repeat;
		background-size: 100% 100%;
	}

	.gs_title {
		padding: 30rpx 30rpx;
		height: 100rpx;
		background: #1597F6;

		.gs_status {
			margin: 0px;
			padding-top: 10rpx;
			font-size: 32rpx;
			color: #fff;
		}
	}

	.gs_list {
		background: #fff;

		.gs_item {
			height: 96rpx;
			display: flex;
			padding: 0px 30rpx;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			box-sizing: border-box;
			border-bottom: 1px solid #e0e5e6;

			&:last-child {
				border-bottom: none
			}

			.gs_left {
				color: #797979;
			}

			.gs_right {
				color: #424242;
			}

			.zc_list {
				width: 100%;
				overflow: hidden;

				.zc_item {
					width: 80rpx;
					height: 80rpx;
					padding: 0px;
					margin-right: 5px;
					margin-bottom: 5px;
					float: left;
					border-bottom: none;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}

	.tph_title {
		padding: 0px 30rpx;
		background: #1597F6;
		font-size: 30rpx;
		height: 96rpx;
		display: flex;
		color: #fff;
		justify-content: space-between;
		align-items: center;
	}

	.tph_list {
		width: 100%;
		margin-bottom: 10px;

		.tph_item {
			padding: 0px 30rpx;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 30rpx;
			background: #fff;
			border-bottom: 1px solid #e0e5e6;

			.tph_left {
				color: #797979;
			}

			.tips_box {
				position: relative;
				margin-left: 5px;

				.tips_icon {
					display: inline-block;
					vertical-align: middle;
					width: 40rpx;
					height: 40rpx;
					background: url(../../static/img/ts_icons.png) center center no-repeat;
					background-size: 100% 100%;
				}

				.tips_text {
					position: absolute;
					width: 200rpx;
					display: none;
					word-break: break-word;
					padding: 10px;
					border-radius: 3px;
					color: #424242;
					text-align: center;
					font-size: 30rpx;
					left: -264rpx;
					top: -20rpx;
					background: #ececec;
					/* box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 12%); */
					z-index: 100;

					&:before {
						display: block;
						content: "";
						width: 15px;
						height: 15px;
						position: absolute;
						transform: rotate(45deg);
						background: #ececec;
						right: -8px;
						top: 13px;
						/* box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 12%); */
						z-index: 99;
					}

				}
			}

			.tips_box:hover .tips_text {
				display: block;
			}
		}
	}

	.farm_detail {
		padding: 0px 30rpx;
		height: 112rpx;
		display: flex;
		align-items: center;
		background: #fff;
		color: rgb(38, 51, 67);
		font-size: 30rpx;
	}

	.family_list {
		padding: 30rpx;
		padding-top: 0px;
		background: #fff;

		.family_item {
			background: rgb(250, 250, 250);
			display: flex;
			margin-bottom: 30rpx;

			&:last-child {
				margin-bottom: 0px;
			}

			padding: 30rpx;
			border-radius: 16rpx;
			align-items: center;

			.family_left {
				color: #BFBFBF;
				font-size: 30rpx;
				line-height: 50rpx;

				.strong_title {
					color: #424242;
					font-size: 30rpx;
					margin-right: 20rpx;
				}

				.condition_span {
					height: 50rpx;
					padding: 0px 10rpx;
					font-size: 28rpx;
					border: 1px solid rgb(87, 107, 222);
					background: rgba(191, 191, 191, .1);
					color: rgb(87, 107, 222);
					border-radius: 3px;
				}

				.id_text {
					font-size: 28rpx;
					margin-top: 5px;
					color: rgb(162, 174, 191);
				}
			}
		}
	}

	.jd_list {
		margin-top: 20rpx;
		background: #fff;
		padding: 0px 30rpx;

		&:before {
			display: block;
			content: "";
			width: 1px;
			height: calc(100% - 40rpx);
			position: absolute;
			left: 38rpx;
			bottom: 20rpx;
			top: 20rpx;
			border-left: 1px solid #eaedef;
		}

		.jd_item {
			position: relative;
			padding-bottom: 40rpx;
			padding-top: 30rpx;

			.jd_item_left {
				position: absolute;
				width: 20rpx;
				display: flex;
				justify-content: flex-start;
				left: 0;

				.right_icon {
					z-index: 9;
					display: inline-block;
					width: 16rpx;
					height: 16rpx;
					position: absolute;
					right: 0px;
					top: 30rpx;
					border: 4rpx solid #fff;
					margin-top: -20rpx;
					background: #ccc;
					border-radius: 100%;
					background-size: 100%;
				}
			}

			.jd_item_right {
				padding-left: 50rpx;

				.h3_jd {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0px;
					font-size: 32rpx;
					margin-bottom: 20rpx;
					color: #929292;

					.time_tips {
						color: #BFBFBf;
						font-weight: 500;
						font-size: 30rpx;
					}
				}

				.dl_txt {
					color: #BFBFBF;
					line-height: 50rpx;
					font-size: 30rpx;

					.strong_dl {
						color: #797979;
						font-weight: bold;
					}
				}

				.hc_list {
					width: 100%;
					overflow: hidden;

					.hc_item {
						width: 100rpx;
						height: 100rpx;
						float: left;
						margin-right: 20rpx;
						margin-bottom: 20rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
