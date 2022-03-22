<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
		<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header> 
		<scroll-view :style="{height:scrollerHeight}" scroll-y="auto"> 
		</scroll-view>
	</view>


</template> 
<script>
	import config from "../../config.js";
	export default {
		data() {
			return {
				title: '导出文件',
				 
				scrollerHeight: '', //路径点集合 
			}
		},
		onLoad(options) {
          uni.showLoading();
		  var _this=this;
		  uni.downloadFile({
		  		url: config.baseUrl+"/exportXlsxByModel?cmd.sqlKey=FZFP_QQSY_PKS.QQSY_LIST_EXP&cmd.xlsKey=qqsy_list&cmd.sqlType=proc&cmd.excelName="+options.excelName+"&cmd.QREGIONID="+options.QREGIONID+"&page.currentPage=1&cmd.QDATA_YEAR=2021",//下载地址接口返回
		  		success: (data) => {
		  			if (data.statusCode === 200) {
		  				//文件保存到本地
		  				uni.saveFile({
		  					tempFilePath: data.tempFilePath, //临时路径
		  					success: function(res) { 
								 //打开文档查看
								 uni.openDocument({
								 	filePath: res.savedFilePath,
								 	fileType:'xls',
								 	success: function(res) {
										uni.hideLoading();
								 		 _this.$toast('打开文档成功') 
								 	},
								 	fail(err) {
										uni.hideLoading();
								 		_this.$toast('打开文档失败') 
								 	}
								 }); 
		  					}
		  				});
		  			}
		  		},
		  		fail: (err) => {
		  			console.log(err);
		  			uni.showToast({
		  				icon: 'none',
		  				mask: true,
		  				title: '失败请重新下载',
		  			});
		  		},
		  	});
		},
		mounted() {
			var _this=this;
			this.barheight = this.$store.state.barHeight; 
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
