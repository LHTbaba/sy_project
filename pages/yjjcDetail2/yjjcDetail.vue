<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
			<view class="gs_title">
				<view class="gs_status">
					入户核实通过
				</view>
				<text style="color:#fff;opacity: .8; font-size: 25rpx;">当前进度</text>
			</view>
			<view class="gs_list">
				<view class="gs_item">
					<text class="gs_left">申请年度:</text>
					<text class="gs_right">2021年</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">所在区域:</text>
					<text class="gs_right">鹰潭市-贵溪市-白田乡-白田村</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">姓名:</text>
					<text class="gs_right">一般农户1</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">证件号码:</text>
					<text class="gs_right">360112******4691</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">家庭人口数:</text>
					<text class="gs_right">2人</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">申请年度:</text>
					<text class="gs_right">2021年</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">联系电话:</text>
					<text class="gs_right">177******0713</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">近一年家庭年均收入:</text>
					<text class="gs_right">123元</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">预警原因:</text>
					<text class="gs_right">饮水安全,饮水安全,其他</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">核实人姓名:</text>
					<text class="gs_right">123</text>
				</view> 
			</view>		
			<view class="gs_list" style="margin-top: 20rpx;"> 
				<view class="gs_item">
					<text class="gs_left">是否同意授权:</text>
					<text class="gs_right">是</text>
				</view> 
				<view class="gs_item" style="height: auto;display: block;padding-bottom: 20rpx;">
					<view class="gs_left" style="width: 100%;height: 60rpx;line-height: 60rpx;">佐证材料:</view>
					<view class="zc_list">
						<!-- <view class="zc_item">
							<image src="../../static/img/dengru_03.png" data-src='../../static/img/dengru_03.png' mode=""></image>
						</view>
						<view class="zc_item">
							<image src="../../static/img/dengru_03.png" data-src='../../static/img/dengru_03.png' mode=""></image>
						</view>
						<view class="zc_item">
							<image src="../../static/img/dengru_03.png" data-src='../../static/img/dengru_03.png' mode=""></image>
						</view> -->
					</view>
				</view> 
			</view>		
			<view class="gs_list" style="margin-top: 20rpx;">  
				<view class="gs_item">
					<text class="gs_left">预警等级:</text>
					<view class="gs_right">
						<text style="color: red;">红色预警</text>
						<text class="red_icon"></text>
					</view>
				</view> 
				<view class="gs_item">
					<text class="gs_left">预警时间:</text>
					<view class="gs_right">
					   2021-06-23
					</view>
				</view> 
			</view>
			<view class="tph_title">
				<text style="">预警情况：</text>
			</view>
			<view class="tph_list">
				<view class="tph_item">
					<view class="tph_left">
							教育部门-重大教育支出
					</view>
					<view class="tips_box">
						<text class="tips_icon"></text>
						<view class="tips_text">
							张三:张三:教育费用自费超过0.5万元（含）
						</view>
					</view>
				</view>
				<view class="tph_item">
					<view class="tph_left">
							教育部门-重大教育支出
					</view>
					<view class="tips_box">
						<text class="tips_icon"></text>
						<view class="tips_text">
							张三:张三:教育费用自费超过0.5万元（含）
						</view>
					</view>
				</view>
			</view>
			<view class="tph_title">
				<text style="">脱贫户信息</text>
				<view class="see_btn" @click="seeDetail()">查看</view>
			</view>
			<view class="tph_list">
				<view class="tph_item">
					<view class="tph_left">
							与户主关系
					</view>
					<view class="tph_right">
						 之女
					</view>
				</view>
				<view class="tph_item">
					<view class="tph_left">
							2020年人均纯收入
					</view>
					<view class="tph_right">
						 20541.25
					</view> 
				</view>
				<view class="tph_item">
					<view class="tph_left">
							2021年最新人均纯收入
					</view>
					<view class="tph_right">
						 20541.25
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
						<!-- <view class="hc_list">
							<view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view>
							<view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view>
							<view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view>
						</view> -->
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
						<!-- <view class="hc_list">
							<view class="hc_item">
								<image src="../../static/img/dengru_03.png" data-src="../../static/img/dengru_03.png" mode=""></image>
							</view>
						</view> -->
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
			console.log(this.barheight);
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
			seeDetail(){ 
				uni.navigateTo({
					url:'../webview/webview?url=https://gxhsbf.zjwq.net/loadPkhxxDataCA?url=/WEB-INF/jsp/gxfpWX/poor_home.jsp&cmd.sqlKey=HU_ZAA.POOR_INFO&cmd.sqlType=proc&cmd.QYEAR=2021&cmd.POOR_ID=3ABA0E18AC956DC4E05350021B0AB9F8'
				})
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
	.gs_list{
		background: #fff;
		.gs_item{
			height: 96rpx;
			display: flex;
			padding: 0px 30rpx;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			box-sizing: border-box;
			border-bottom: 1px solid #e0e5e6;
			&:last-child{
				border-bottom:none
			}
			.gs_left{
				color: #797979;
			}
			.gs_right{
				color: #424242;
			}
			.zc_list{
				width: 100%;
			    overflow: hidden;
				.zc_item{
					width: 80rpx;
					height: 80rpx;
					padding: 0px;
					margin-right: 5px;
					margin-bottom: 5px;
					float: left;
					border-bottom: none;
					
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	.tph_title{
		padding: 0px 30rpx;
		background: #1597F6;
		font-size: 30rpx;
		height: 96rpx;
		display: flex;
		color: #fff;
		justify-content: space-between;
		align-items: center;
		.see_btn{
			display: inline-block;
			padding: 6rpx 24rpx;  
			background: #0687e6;
			border: 1px solid rgba(255,255,255,0.60);
			border-radius: 5px;
			color: rgba(255,255,255,.82);
		}
	}
	.tph_list{
		width: 100%;
		margin-bottom: 10px;
		.tph_item{
			padding: 0px 30rpx;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 30rpx;
			background: #fff;
			border-bottom: 1px solid #e0e5e6;
			&:last-child{
				border-bottom: none;
			}
			.tph_left {
			    color: #797979;
			}
			.tph_right {
			    color: #424242;
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
				.tips_text{
					position: absolute;
					width: 200rpx;
					display: none;
					word-break: break-word;
					padding: 10px;
					border-radius: 3px;
					color: #424242;
					text-align: center;
					font-size: 28rpx;
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
			.tips_box:hover .tips_text{
				display: block;
			}
		}
	}
	.farm_detail{
		padding: 0px 30rpx;
		height: 96rpx;
		display: flex;
		align-items: center;
		background: #1597F6;
		color: #fff;
		font-size: 30rpx;
	}
	.family_list{ 
	    padding: 0px 30rpx;
		background: #fff;
		.family_item{
			width: 100%;
			display: flex;
			padding: 16rpx 0px;
			align-items: center;
			.family_left {
			    color: #BFBFBF;
			    font-size: 24rpx;
				.strong_title {
				    color: #424242;
				    font-size: 28rpx;
				    margin-right: 20rpx;
				}
				.condition_span{
					padding: 3px 5px;
					background: rgba(191,191,191,.1);
					color: #bfbfbf;
					border-radius: 3px;
				}
				.id_text{
					font-size: 24rpx;
				    margin-top: 5px;
					color: #8f8f94;
				}
			}
		}
	}
	.jd_list{
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
		.jd_item{
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
			.jd_item_right{
				padding-left: 50rpx;
				.h3_jd{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0px;
					font-size: 32rpx;
					margin-bottom: 20rpx;
					color: #929292;
					.time_tips{
						color: #BFBFBf;
						font-weight: 500;
						font-size: 30rpx;
					}
				}
				.dl_txt{
					color: #BFBFBF;
					line-height: 50rpx;
					font-size: 30rpx;	
					.strong_dl{
						color: #797979;
						font-weight: bold;
					}
				}
				.hc_list{ 
					width: 100%;
					overflow: hidden; 
					.hc_item{
						width: 100rpx;
						height: 100rpx;
						float: left;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
