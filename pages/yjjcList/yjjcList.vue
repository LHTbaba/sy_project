<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'> 
		<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header> 
		<view class="bar_list" id="bar_list">
			<view class="bar_item" :class="tabIndex==index?'active':''" v-for="(item,index) in barList" :key='index' @click="changerhhs(index)">
				{{item}}
			</view> 
		</view>
		<view class="search_result" id="search_result" style="background: #fff;">
			<view class="search_box">
				<input type="text" value="" placeholder="请输入农户姓名" />
				<view class="search_icon" @click="search()"></view>
			</view>
		</view>
		<!-- <view class="search_result" id="search_result">
			<view class="result_left">
				共<text class="result_num" style="margin: 0px 5rpx;">{{reNum}}</text>户<text class="result_text" style="padding-left: 6rpx;">{{retext}}</text>
			</view>
			<view class="result_right">
				<view class="search_icon" @click="search()"></view>
			</view>
		</view> -->
		
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'
		 @scrolltoupper="upper" :refresher-triggered="refresherTriggered" @refresherrefresh="refresherrefresh"
		 @refresherrestore="refresherrestore" @refresherabort="refresherabort" @scrolltolower="lower" refresher-enabled="true">
		 <view class="rlist">
		    <view class="rlist_item" v-for="(item,index) in list" @click="toRhhs(item.type)" :key="index">
		 	  	<view class="line_left" v-if="item.type=='1'" style="background: rgb(37, 183, 110);">
		 	  		
		 	  	</view>
				<view class="line_left" v-if="item.type=='2'" style="background: rgb(242, 168, 59);">
					
				</view>
				<view class="line_left" v-if="item.type=='3'" style="background: rgb(231, 98, 75);">
					
				</view>
				<view class="js_top">
		 	  		<view class="js_time">
		 	  			创建2021-08-09
		 	  		</view>
					<view class="js_text" v-if="item.type=='1'">
						<text class="text">脱贫户</text>
					</view>
					<view class="js_text js_text2" v-if="item.type=='2'">
						<text class="text">脱贫户</text>
					</view>
					<view class="js_text js_text3" v-if="item.type=='3'">
						<text class="text">脱贫户</text>
					</view>
		 	  	</view>
				<view class="rhs_top">
		 	  		<view class="rhs_top_left">
		 	  			<view class="name_strong"  style="color: rgb(38, 51, 67);">
		 	  				{{item.name}}
		 	  			</view>
						<text style="color: #8f8f94;">申请人姓名</text>
		 	  		</view>
					<view class="rhs_top_left" style="text-align: right;">
						<view class="name_strong"  style="color: rgb(38, 51, 67);">
							344444444
						</view>
						<text style="color: #8f8f94;">身份证号码</text>
					</view>
					 
		 	  	</view>
				<view class="rhs_bottom">
					<text class="local_icon"></text>{{item.address}}<text class="line_hui">|</text>{{item.address}}
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
				title: '入户核实', 
				reNum:0,
				isMore: false,
				noMore: false,
				pageNum: 1,
				pageSize: 15,
				refresherTriggered: false,
				_refresherTriggered: false,
				retext:'扫码待核实',
				barList:['待核实','已核实'],
				tabIndex:0,
				list:[
					{
					name:'占标的',
					day:2,
					nums:3,
					address:'白田乡',
					status:'脱贫户',
					type:'1',
					reason:'因贫,因意外事故'
				   },
				   {
					name:'占标的',
					day:2,
					nums:3,
					address:'白田乡',
					status:'脱贫户',
					type:'2',
					reason:'因贫,因意外事故'
				   },
				   {
					name:'占标的',
					day:2,
					nums:3,
					address:'白田乡',
					status:'脱贫户',
					type:'3',
					reason:'因贫,因意外事故'
				   },
				   {
					name:'占标的',
					day:2,
					nums:3,
					address:'白田乡',
					status:'脱贫户',
					type:'1',
					reason:'因贫,因意外事故'
				   },
				   {
					name:'占标的',
					day:2,
					nums:3,
					address:'白田乡',
					status:'脱贫户',
					type:'1',
					reason:'因贫,因意外事故'
				   },
				   {
					name:'占标的',
					day:2,
					nums:3,
					address:'白田乡',
					status:'脱贫户',
					type:'1',
					reason:'因贫,因意外事故'
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
			toRhhs(type){
				if(type=='1'){
					uni.navigateTo({
						url:'../rhhsUpdate1/rhhsUpdate'
					})
				};
				if(type=='2'){
					uni.navigateTo({
						url:'../rhhsUpdate/rhhsUpdate'
					})
				};
				if(type=='3'){
					uni.navigateTo({
						url:'../rhhsDetail/rhhsDetail'
					})
				};
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
				});
				_this.$nextTick(function() {
					query.select('#bar_list').boundingClientRect(data => {
						_this.scrollerHeight = _this.scrollerHeight - data.height;
					}).exec();
				});
				_this.$nextTick(function() {
					query.select('#search_result').boundingClientRect(data => {
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
			position: relative;
		}
		.active.bar_item{
			&::after{
				display: block;
				position: absolute;
				content: "";
				width: 36rpx;
				height: 8rpx;
				bottom: 10rpx;
				left: 0;
				right: 0;
				margin: auto;
				border-radius: 4rpx;
				background: rgba(87, 107, 222, 1);
				box-shadow: 0px 2px 8px rgba(87, 107, 222, 0.8);
			}
			 
		}
	}
	.search_result{
		padding: 20rpx 30rpx;
		background: #F7F9FA; 
		display: flex;
		font-size: 30rpx;
		justify-content: space-between;
		align-items: center;
		.search_box{
			height: 80rpx;
			display: flex;
			width: 100%;
			padding: 0px 20rpx;
			align-items: center;
			border-radius: 8rpx;
			border: 1px solid rgba(234, 239, 236, 1);
			box-sizing: border-box;
			background: rgba(250, 250, 250, 1);
			input{
				height: 100%; 
				flex: 1;
			}
			.search_icon{
				display: inline-block;
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/img/bigsearch.png) center no-repeat;
				background-size: 100% 100%;
			}
		}
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
				background: url(../../static/img/bigsearch.png) center no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	.rlist{ 
		padding: 30rpx;
		.rlist_item{
			background: #fff;
			padding: 30rpx;
			border-radius: 8rpx;
			margin-bottom: 30rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06); 
			position: relative;
			.line_left{
				width: 8rpx;
				height: 48rpx;
				position: absolute;
				left: 0;
				top: 0;
			}
			.js_top{
				margin-bottom: 20rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.js_time{
					color: rgb(162, 174, 191);
					font-size: 28rpx;
				}
				.js_text{
					height: 50rpx;
					padding: 0px 30rpx; 
					line-height: 50rpx;
					font-size: 28rpx;
					color: #fff;
					margin-right: 10rpx;
					position: relative;
					.text{
						position: relative;
						z-index: 1;
					}
					&::before{
						display: block;
						content: "";
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						background: rgb(37, 183, 110);
						transform: skewX(-30deg);
					}
					 
				}
				.js_text2{
					&::before{
						background:rgb(242, 168, 59) ;
					}
				}
				.js_text3{
					&::before{
						background: rgb(231, 98, 75);
					}
				}
			}
			.rhs_top{
				width: 100%;
				line-height: 60rpx;
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				justify-content: space-between;
				font-size: 30rpx;
				.name_strong{
					font-size: 36rpx;
				}
				.rhs_top_left{
					
				}
				.rhs_top_middle{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.rhs_top_right{
					text-align: right;
				}
			}
			.rhs_bottom{
				display: flex;
				align-items: center;
				font-size: 30rpx;
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
					font-size: 28rpx;
					margin-left: 40rpx;
					color: rgb(231, 98, 75);
				}
				.line_hui{
					margin: 0px 20rpx;
					color: rgb(243, 244, 246);
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
