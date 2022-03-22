<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'> 
		<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>  
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'
		 >
		 <view class="tjlist">
		    <view class="tjlist_item" v-for="(item,index) in list" :key="index">
		 	  	 <view class="tj_title">
		 	  	 	<view class="tj_title_left">
		 	  	 		<text class="icon_title"></text>
						<text class="title_strong">{{item.name}}</text>
		 	  	 	</view>
					<text class="arrow_right"></text>
		 	  	 </view>
				 <view class="tj_nums">
				 	<view class="tj_nums_middle">
				 		<view class="hj_nums">
				 			<view class="nums_strong">{{item.nums1}}</view>
							<text class="nums_text">汇总</text>
				 		</view>
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums2}}</view>
							<text class="nums_text">未入户</text>
						</view>
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums3}}</view>
							<text class="nums_text">待村审核</text>
						</view>
				 	</view>
					<view class="tj_nums_middle">
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums4}}</view>
							<text class="nums_text">村审核通过</text>
						</view>
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums5}}</view>
							<text class="nums_text">村审核不通过</text>
						</view>
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums6}}</view>
							<text class="nums_text">镇审核通过</text>
						</view>
					</view>
					<view class="tj_nums_middle">
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums7}}</view>
							<text class="nums_text">镇审核不通过</text>
						</view>
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums8}}</view>
							<text class="nums_text">县审核通过</text>
						</view>
						<view class="hj_nums">
							<view class="nums_strong">{{item.nums9}}</view>
							<text class="nums_text">县审核不通过</text>
						</view>
					</view>
				 </view>
		    </view>
		 </view>	 
        <view class="loading" v-if="isMore">
        	<image src="../../static/img/loading.gif" style="width: 40rpx;height: 40rpx;vertical-align: middle;margin-top: -4rpx;margin-right: 10rpx;"></image>
        	<text>正在加载更多</text>
        </view>
        <view v-if="noMore" class="noMore">
        	<text class="line"></text><text style="padding: 0px 30rpx;color: #999;">没有数据了</text><text class="line"></text>
        </view>
		</scroll-view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				title: '统计列表', 
				reNum:0,
				isMore: false,
				noMore: false,
				pageNum: 1,
				pageSize: 15,
				refresherTriggered: false,
				_refresherTriggered: false, 
				tabIndex:0,
				list:[
					{
					name:'于都县', 
					nums1:3,
					nums2:3,
					nums3:3,
					nums4:3,
					nums5:3,
					nums6:3,
					nums7:3,
					nums8:3,
					nums9:3, 
				   },
				  {
					name:'于都县', 
					nums1:3,
					nums2:3,
					nums3:3,
					nums4:3,
					nums5:3,
					nums6:3,
					nums7:3,
					nums8:3,
					nums9:3, 
				  },
				   {
					name:'于都县', 
					nums1:3,
					nums2:3,
					nums3:3,
					nums4:3,
					nums5:3,
					nums6:3,
					nums7:3,
					nums8:3,
					nums9:3, 
				   },
				  {
					name:'于都县', 
					nums1:3,
					nums2:3,
					nums3:3,
					nums4:3,
					nums5:3,
					nums6:3,
					nums7:3,
					nums8:3,
					nums9:3, 
				  },
				  {
					name:'于都县', 
					nums1:3,
					nums2:3,
					nums3:3,
					nums4:3,
					nums5:3,
					nums6:3,
					nums7:3,
					nums8:3,
					nums9:3, 
				  },
				  {
					name:'于都县', 
					nums1:3,
					nums2:3,
					nums3:3,
					nums4:3,
					nums5:3,
					nums6:3,
					nums7:3,
					nums8:3,
					nums9:3, 
				  },
				],
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
			changerhhs(index) {
				this.tabIndex = index;
				this.pageNum = 1;
				this.list = [];
				// this.getSH();
			},
			upper() {
				//console.log('上拉刷新');
				this.pageNum = 1;
				this.list = [];
				// this.getSH();
			},
			search(){
				uni.navigateTo({
					url:'../rsearch/rsearch'
				})
			},
			lower() {
				//console.log("下拉加载更多");
				this.pageNum++;
				this.isMore = true;
				// this.getSH();
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
				// this.getSH();
				// if (JSON.stringify(this.searchlist) != "{}") {
				// 	this.zgSearch();
				// } else {
				// 	this.getData();
				// }
				// this.getData()
			},
			back(){
				uni.navigateBack({
					delta:1
				})
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

<style scoped lang="scss">
	.bar_list{
		width: 100%;
		height: 100rpx;
		background: #fff;
		display: flex;
		.bar_item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size:30rpx;
			color: #929292;
			box-sizing: border-box;
			border-bottom: 2px solid transparent;
		}
		.active.bar_item{
			color: #00B65A;
		    border-color: #00B65A;
		}
	}
	.search_result{
		padding: 0px 30rpx;
		background: #F7F9FA;
		height: 100rpx;
		display: flex;
		font-size: 30rpx;
		justify-content: space-between;
		align-items: center;
		.result_left{
			height: 100%;
			display: flex;
			color: #424242;
			align-items: center;
		}
		.result_right{
			height: 100%;
			display: flex;
			align-items: center;
			.search_icon{
				display: inline-block;
				width: 50rpx;
				height: 50rpx;
				// background: url(../../static/img/bigsearch.png) center no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	.rlist{
		width: 100%;
		.rlist_item{
			background: #fff;
			padding: 40rpx 30rpx;
			border-bottom: 1px solid #e0e6e4;
			.rhs_top{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 30rpx;
				.rhs_top_left{
					
				}
				.rhs_time{
					height: 80rpx;
					font-size: 30rpx;
					color: #F45520;
				}
				.rhs_top_right{
					text-align: right;
				}
			}
			.rhs_bottom{
				display: flex;
				align-items: center;
				font-size: .28rem;
				color: #797979;
				.local_icon{
					display: inline-block;
					width: 40rpx;
					height: 40rpx;
					margin-right: 6rpx;
					// background: url(../../static/img/address.png) center no-repeat;
					background-size: 100% 100%;
				}
				.xz_icon{
					padding: 5rpx 20rpx; 
					border-radius: 40rpx;
					color: #F45520;
					font-size: 25rpx;
					margin: 0px 10rpx 0px 20rpx;
					background: rgba(244,85,32,0.10);
					border: 1px solid #f45520;
				}
				.reason {
				    padding: 5rpx 20rpx;
				    border-radius: 40rpx;
				    color: #1597F6;
				    max-width: 300rpx;
				    white-space: nowrap;
				    text-overflow: ellipsis;
				    overflow: hidden;
				    font-size: 25rpx;
				    background: rgba(21,151,246,0.10);
				    border: 1px solid #1597f6;
				}
			}
			.seeBtn {
			    width: 100%;
			    height: 80rpx;
			    box-sizing: border-box;
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    font-size: 32rpx;
			    margin-top: 20rpx;
			    color: #1597F6;
			    border-radius: 4px;
			    background: rgba(21,151,246,.1);
			    border: 1px solid #1597F6;
			}
		}
	}
	.loading,
	.noMore {
		text-align: center;
	}
	.tjlist{
		padding:30rpx;
		.tjlist_item{
			width: 100%;
			margin-bottom: 30rpx;
			background: #ffffff;
			border-radius: 8px;
			box-sizing: border-box;
			box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.03);
			.tj_title{
				height: 100rpx;
				padding: 0px 30rpx;
				box-sizing: border-box;
				border-bottom: 1px solid #e0e4e6;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.tj_title_left{
					height: 100%;
					display: flex;
					align-items: center;
					.icon_title{
						display: inline-block;
						width: 40rpx;
						height: 40rpx;
						// background: url(../../static/img/tj1.png) center center no-repeat;
						background-size: 100% 100%;
						margin-right: 10rpx;
					}
					.title_strong{
						font-size: 32rpx;
						color: #424242;
						font-weight: bold;
					}
					.arrow_right {
					    display: inline-block;
					    width: 50rpx;
					    height:50rpx;
					    background: url(../../static/img/icons-arrow.png) center center no-repeat;
					    background-size: 100% 100%;
					}
				}
			}
		    .tj_nums{
				padding: 30rpx;
			    padding-bottom: 0px;
			}
			.tj_nums_top, .tj_nums_middle {
			    width: 100%;
			    display: flex;
			}
			.hj_nums{
				width: calc((100% - 60rpx) / 3);
				margin-right: 30rpx;
				margin-bottom: 30rpx;
				height: 140rpx;
				background: #f5f7f8;
				border-radius: 4px;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}
			.hj_nums:nth-child(3n){
				margin-right: 0px;
			}
			.nums_strong{
				font-size: 40rpx;
				font-weight: bold;
			}
			.nums_text{
				font-size: 30rpx;
				color: #929292;
				margin-top: 10rpx;
			}
		}
		.tjlist_item:nth-child(3n+1) .icon_title{
			// background: url(../../static/img/tj1.png) center center no-repeat;
		    background-size: 100% 100%;
		}
		.tjlist_item:nth-child(3n+1) .nums_strong{
			color: #1597F6;
		}
		.tjlist_item:nth-child(3n+2) .icon_title{
			// background: url(../../static/img/tj2.png) center center no-repeat;
		    background-size: 100% 100%;
		}
		.tjlist_item:nth-child(3n+2) .nums_strong{
			color: #EEB31C;
		}
		.tjlist_item:nth-child(3n+3) .icon_title{
			// background: url(../../static/img/tj3.png) center center no-repeat;
		    background-size: 100% 100%;
		}
		.tjlist_item:nth-child(3n+3) .nums_strong{
			color: #46A34A;
		}
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
</style>
