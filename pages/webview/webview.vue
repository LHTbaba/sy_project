<template>
	<view class="" style="width: 100vw;height: 100vh;" id="wrap"> 
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
			 <web-view :src="url"></web-view>
		</scroll-view>
	</view>


</template>

<script>
	import config from "../../config.js";
	export default {
		data() {
			return {
				title: '户详情', 
				url:'',
				version : (new Date()).valueOf(),
				scrollerHeight: '', //路径点集合 
			}
		}, 
		onLoad(params) {
			this.getHeight(); 
			var type=params.type;
			var num=Math.random(); 
			if(type=='zfsb'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/poorSearch.jsp&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sjhs'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/dhs_list.jsp&cmd.hsStatus=0&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
				 
			};
			if(type=='sjhs3'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/dhs_list.jsp&cmd.hsStatus=2&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
				 
			};
			if(type=='xjhs'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/yj_list.jsp&cmd.hsStatus=0&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='xjhs3'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/yj_list.jsp&cmd.hsStatus=2&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='srjc'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/ytfp/jaapp/poor_search1.jsp&cmd.sqlKey=H5_XCX_PKS.SRCJ_SEARCH_UI&cmd.sqlType=proc&cmd.hsStatus=0&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='jcdx'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/jcdx_list.jsp&cmd.hsStatus=0&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			}; 
			if(type=='pzzsb'){
				 this.url=config.baseUrl+'/doRedirect.do?redirectPageName=/WEB-INF/jsp/gxfpWX/poorapp/ytpoorReport.jsp&cmd.sqlKey=FZFP_LHC_PKS.GET_QY2&_=14804051864521&cmd.sqlType=proc&version='+this.version+'&cmd.USERNAME='+uni.getStorageSync('poorName')+'&cmd.USERCARD='+uni.getStorageSync('userCard');
			};
			if(type=='pjdsearch'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/poorapp/helpSearch.jsp.jsp&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='pjcdx'){
				var date=new Date();
				var year=date.getFullYear();
				var id=uni.getStorageSync('jcdx');
				var type=uni.getStorageSync('puserType');
				this.url=config.baseUrl+'/loadPkhxxDataCA.action?url=/WEB-INF/jsp/gxfpWX/poor_home.jsp&cmd.sqlKey=HU_ZAA.POOR_INFO&cmd.sqlType=proc&cmd.QYEAR='+year+'&cmd.sqlType=proc'+
					"&cmd.POOR_ID="+id+"&cmd.QHU_TYPE="+type;
			};
			if(type=='bdzfsbtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=05&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='slrqtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail2.jsp&cmd.sqlKey=H5_XCX_TJ.SLRQ_TJ&cmd.sqlType=proc&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='qqsydbtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail_qqsytj.jsp&cmd.sqlType=proc&cmd.sqlKey=H5_XCX_TJ.QQSY_TJ&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='qqsydbjg'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail_qqsyjgtj.jsp&cmd.sqlType=proc&cmd.sqlKey=H5_XCX_TJ.QQSY_JGTJ&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='srjctj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=05&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRjdtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=1&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRrjggtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=2&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRrjgdtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=3&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRgxggtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=4&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRsrwltj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=5&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRzbfxtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=6&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='sRsnxbtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/srdc_tj/poor_search1.jsp&cmd.sqlKey=H5_XCX_TJ.SRCJ_SEARCH_UI1&cmd.sqlType=proc&cmd.FROMINDEX=7&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='hsnhsbtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=01&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='hsgbzftj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=03&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='hsstjhtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=02&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='hssjjhtj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=04&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='bdgbzf'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=05&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='hshstj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail3.jsp&cmd.sqlKey=FZFP_LB_PKS.FZFP_NHZDSBWK_H5&cmd.sqlType=proc&cmd.QINFROM=&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			};
			if(type=='hsfltj'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/StatisticsDetail1.jsp&cmd.sqlKey=FZFP_LZY_PKS.FFPRKFL_TJ_LISTWK_H5&cmd.sqlType=proc&cmd.QINFROM=2&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			}; 
			if(type=='tphxx'){
				 this.url=config.baseUrl+'/loadDataByTokenReturn?reloadName=/WEB-INF/jsp/gxfpWX/villageapp/tph_list.jsp&cmd.token='+uni.getStorageSync('token')+'&version='+this.version;
			}; 
		  console.log(this.url)
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this; 
		},
		methods: { 
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height+'px';
				}).exec(); 
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
		padding: 0px 30rpx;
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
			font-size: 26rpx;
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
			font-size: 28rpx;
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
					left: -220rpx;
					top: -28rpx;
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
						font-size: 25rpx;
					}
				}
				.dl_txt{
					color: #BFBFBF;
					line-height: 50rpx;
					font-size: 26rpx;	
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
