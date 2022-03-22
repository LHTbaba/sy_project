<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
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
			<view class="nums_box" style="margin-top: 12rpx;">
				<view class="nums_h3">
					一、工资性收入
				</view>
				<view class="nums_right">
					<view class="nums_strong">
						333
					</view>元
				</view>
			</view>
			<view class="table">
				<view class="table_tr">
					<view class="td_bg">
						外出务工收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						公益性岗位收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						其他务工收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nums_box" style="margin-top: 12rpx;">
				<view class="nums_h3">
					二、生产经营性收支
				</view>
			</view>
			<view class="table">
				<view class="table_tr">
					<view class="td_bg">
						生产经营性收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						生产经营性支出：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>

			</view>
			<view class="nums_box" style="margin-top: 12rpx;">
				<view class="nums_h3">
					三、财产性收入
				</view>
				<view class="nums_right">
					<view class="nums_strong">
						333
					</view>元
				</view>
			</view>
			<view class="table">
				<view class="table_tr">
					<view class="td_bg">
						资产收益扶贫分红收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						其他财产性收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nums_box" style="margin-top: 12rpx;">
				<view class="nums_h3">
					四、转移性收入
				</view>
				<view class="nums_right">
					<view class="nums_strong">
						333
					</view>元
				</view>
			</view>
			<view class="table">
				<view class="table_tr">
					<view class="td_bg">
						计划生育金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						低保金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						特困供养金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						养老保险金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						生态补偿金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						生态补偿金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nums_box" style="margin-top: 12rpx;">
				<view class="nums_h3">
					其他转移性收入
				</view>
				<view class="nums_right">
					<view class="nums_strong">
						333
					</view>元
				</view>
			</view>
			<view class="table">
				<view class="table_tr">
					<view class="td_bg">
						耕地地力补贴：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						粮食直补：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						水库移民补助：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						退耕还林补助：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						森林抚育金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						造林补贴：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						油茶补助：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						林业产业补助：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						残疾人两项补贴：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						优抚金：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						赡养收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						高龄补贴：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						城乡低保物价补贴：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						城乡特困价格临时补助：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						其他可记收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
				<view class="table_tr">
					<view class="td_bg">
						孤儿及事实无人赡养收入：
					</view>
					<view class="td_right">
						<view class="ipt_box">
							<input type="text" disabled="disabled" placeholder="请输入" value="" class="ipt_text" /><text class="dw_text">(元)</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>


</template>

<script>
	import config from "../../config.js";
	export default {
		data() {
			return {
				title: '收入采集',
				reNum: 0,
				isMore: false,
				noMore: false,
				pageNum: 1,
				typeIndex: '',
				zghList: [],
				typeArray: [],
				pageSize: 15,
				src: "",
				addbool: false,
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
		onShow() {
			uni.$emit('canvasURL', function(value) {

			})
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			console.log(this.barheight);
			var _this = this;
			console.log(this.openId);
			_this.getHeight();
			_this.getCode();
		},
		methods: {
			//上传图片
			chooseImage() {
				var _this = this;
				wx.chooseImage({
					count: 9, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera', 'album'], //从相册选择
					success: (res) => {
						console.log(res)
						var tempFilePaths = res.tempFilePaths
						console.log(config.baseUrl)
						let sessionId = uni.getStorageSync("sessionId");
						tempFilePaths.forEach(item => {
							wx.uploadFile({
								url: config.baseUrl + '/Upload_wk',
								header: {
									"Content-Type": "multipart/form-data",
									"accept": 'application/json',
									'Cookie': 'JSESSIONID=' + sessionId
								},
								filePath: item, // uni.chooseImage函数调用后获取的本地文件路劲
								name: 'file',
								success: (res) => {
									console.log(res);
									if (res.statusCode == '200') {
										var data = JSON.parse(res.data)
										var obj = {
											name: data.data.name,
											type: data.data.suffix,
											url: config.baseUrl + '/' + data.data.path,
										};
										_this.imgList.push(obj);
										console.log(_this.imgList)
									} else {
										_this.$toast(res.msg)
									}
								},
								fail: (err) => {
									_this.$toast(err)
								}
							});

						})

					}
				});
			},
			ViewImage(e) {
				var _this = this;
				var imgLists = _this.imgList.map(item => {
					return item.url
				})
				// _this.imgList.forEach(item=>{
				// 	if(item.type=='png'||item.type=='jpg'||item.type=='jpeg'||item.type=='gif'||item.type=='bmp'){
				// 		imgLists.push(item.url)
				// 	}
				// })
				uni.previewImage({
					urls: imgLists,
					current: e.currentTarget.dataset.index
				});
				// uni.previewImage({
				// 	urls: _this.imgList,
				// 	current:e.currentTarget.dataset.src
				// });
			},
			delImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定删除该照片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			addFamily() {
				this.addbool = true;
			},
			closeFamily() {
				this.addbool = false;
			},
			maskShow() {
				uni.navigateTo({
					url: '../qianming/qianming'
				})
			},
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height;
				}).exec();
				// query.select('#report_sub').boundingClientRect(data => {
				// 	_this.scrollerHeight = _this.scrollerHeight - data.height;
				// }).exec();
				_this.$nextTick(function() {
					query.select('#header').boundingClientRect(data => {
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				});
			},
			getCode() {
				var _this = this;
				uni.request({
					url: config.baseUrl + '/Imagexcx.img?data=' + new Date(), //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',

					},
					method: 'GET', //请求方式  或GET，必须为大写
					success: res => {
						console.log(res)
						if (res.data.code == "0") {
							let str = res.data.data.valicode.replace(/\. +/g, '')
							str = str.replace(/[\r\n]/g, '')
							_this.src = ' data:image/jpeg;base64,' + str;
							// _this.sessionId = res.data.data.JESSIONID
						} else {
							_this.$toast('验证码获取失败');

						}
					},
					fail: err => {
						console.log(err)
						uni.showToast({
							icon: 'none',
							title: '请求出错: ' + err,
							duration: 2000
						});
					}
				})
			},

			seeDetail() {
				uni.navigateTo({
					url: '../webview/webview?url=https://gxhsbf.zjwq.net/loadPkhxxDataCA?url=/WEB-INF/jsp/gxfpWX/poor_home.jsp&cmd.sqlKey=HU_ZAA.POOR_INFO&cmd.sqlType=proc&cmd.QYEAR=2021&cmd.POOR_ID=3ABA0E18AC956DC4E05350021B0AB9F8'
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
				justify-content: flex-start;
				box-sizing: border-box;
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
				padding: 20rpx;
			}
		}
	}

	.nums_box {
		padding: 30rpx;
		display: flex;
		background: #fff;
		justify-content: space-between;
		align-items: center;

		.nums_h3 {
			font-size: 32rpx;
			color: rgb(38, 51, 67);
		}

		.nums_right {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			color: rgb(162, 174, 191);

			.nums_strong {
				font-size: 32rpx;
				color: linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);
				margin-right: 10rpx;
			}
		}
	}

	.ipt_box {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 1);
		border-radius: 6rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		padding-right: 20rpx;
		padding-left: 20rpx; 

		.ipt_text {
			flex: 1;
			height: 100%;
			border: none;
		}

		.dw_text {
			color: rgb(162, 174, 191);
			font-size: 28rpx;
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

	.bz_h3 {
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}

	.report_sub {
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
		background: #fff;

		.reportBtn {
			height: 90rpx;
			line-height: 90rpx;
			font-size: 32rpx;
			background: #317FEC;
			color: #fff;
			text-align: center;
		}
	}

	.report_box {
		padding: 20rpx 40rpx 0px 40rpx;
		background: #fff;

		.ipt_box {
			width: 100%;
			display: flex;
			align-items: center;

			input {
				height: 90rpx;
				font-size: 28rpx;
				flex: 1;
				border: none;
			}
		}
	}

	.report_list {
		padding: 20rpx 40rpx;
		background: #fff;

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

	.bz_box {
		padding: 20rpx 40rpx;
		margin-top: 20rpx;
		background: #fff;

		.bz_text {
			color: #424242;
			font-size: 24rpx;

			.bz_h3 {
				width: 100%;
				text-align: left;
				font-size: 28rpx;
				line-height: 60rpx;
			}

			.my_box {
				width: 100%;
				height: 300rpx;
				border-radius: 6rpx;
				background: rgba(255, 255, 255, 0.08);
				border: 1px solid rgba(68, 107, 207, 0.17);
				box-sizing: border-box;
				overflow: hidden;
				margin: 20rpx 0px;
				position: relative;

				image {
					width: 100%;
					height: 100%;
				}

				.qm_mark {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30rpx;
					color: #ccc;
					background: rgba(0, 0, 0, .01);
					cursor: pointer;
				}
			}
		}
	}

	.delFamily {
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		background: url(../../static/img/delForm.png) center center no-repeat;
		background-size: 100% 100%;
	}

	.add_farm {
		width: 100%;
		height: 88rpx;
		opacity: 1;
		text-align: center;
		line-height: 88rpx;
		border: 1px solid rgba(87, 107, 222, 1);
		box-sizing: border-box;
		background: rgba(87, 107, 222, 0.1);
		border-radius: 8rpx;
		color: linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);
	}

	.uploads_box {
		padding: 20rpx 40rpx;
		margin-top: 20rpx;
		background: #fff;

		.upload_h3 {
			font-size: 30rpx;
			margin-bottom: 10rpx;
			color: rgb(38, 51, 67);
		}

		#fileText {
			width: 100%;
			box-sizing: border-box;
			border: 1px solid #e0e5e6;
			border-radius: 3px;
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			textarea {
				border: none;
				font-size: 28rpx;
				margin: 0px;
				height: 200rpx;
				padding: 20rpx;
			}
		}
	}

	.ipt_choose {
		width: 100%;
		box-sizing: border-box;

		.ipt_checked {
			margin-bottom: 20rpx;
			height: 90rpx;
			box-sizing: border-box;
			background: #fff;
			padding-left: 20rpx;
			display: flex;
			border-radius: 3px;
			align-items: center;
			font-size: 30rpx;
			color: #282828;
			border: 1px solid #efefef;
		}
	}

	.upload_box {
		// padding: 0px 20rpx;
		overflow: hidden;

		.upload_item {
			width: 120rpx;
			height: 120rpx;
			float: left;
			margin-right: 20rpx;
			margin-top: 20rpx;
			position: relative;
			overflow: hidden;

			.uploadImg {
				width: 100%;
				height: 100%;

			}

			.delBtn {
				position: absolute;
				top: -8rpx;
				right: -8rpx;
				width: 40rpx;
				height: 40rpx;
				border-bottom-left-radius: 50%;
				background: rgba(0, 0, 0, .3);

			}
		}


		.upload_btn {
			width: 120rpx;
			height: 120rpx;
			box-sizing: border-box;
			// border: 1px solid #CCCCCC;
			display: flex;
			float: left;
			background: #f7f7f7;
			margin-right: 20rpx;
			margin-top: 20rpx;
			justify-content: center;
			align-items: center;
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

		.see_btn {
			display: inline-block;
			padding: 6rpx 24rpx;
			background: #0687e6;
			border: 1px solid rgba(255, 255, 255, 0.60);
			border-radius: 5px;
			color: rgba(255, 255, 255, .82);
		}
	}

	.ipt {
		width: 280rpx;
		height: 70rpx;
		line-height: 70rpx;
		padding-right: 10rpx;
		font-size: 30rpx;
		text-align: right;
		margin: 0px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 3px;
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

			&:last-child {
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

				.tips_text {
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

			.tips_box:hover .tips_text {
				display: block;
			}
		}
	}

	.farm_detail {
		padding: 0px 30rpx;
		height: 96rpx;
		display: flex;
		align-items: center;
		background: #1597F6;
		color: #fff;
		font-size: 30rpx;
	}

	.nh_mask {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, .4);
	}

	.add_box {
		width: 80%;
		height: 600rpx;
		box-sizing: border-box;
		padding: 40rpx;
		position: fixed;
		background: #fff;
		z-index: 99;
		border-radius: 10rpx;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
	}

	.completeBtn {
		display: flex;
		width: 100%;
		margin-top: 20rpx;
		height: 88rpx;
		font-size: 30rpx;
		color: #fff;
		border-radius: 10rpx;
		background: #1597F6;
		justify-content: center;
		align-items: center;
	}

	.del_team {
		display: inline-block;
		position: absolute;
		width: 36rpx;
		height: 36rpx;
		right: 20rpx;
		top: 20rpx;
		background: url(../../static/img/del_team.png) center center no-repeat;
		background-size: 100% 100%;
	}

	.add_h3 {
		text-align: center;
		font-size: 36rpx;
		color: #424242;
	}

	.team_list {
		width: 100%;

		.team_item {
			width: 100%;
			margin-top: 30rpx;
			display: flex;
			align-items: center;
			height: 100rpx;
			font-size: 30rpx;
			border-bottom: 1px solid #E0E5E6;

			.team_label {
				width: 200rpx;

			}

			.picker {
				flex: 1;
				display: flex;
				height: 100%;
				align-items: center;
			}

			.team_ipt {
				flex: 1;
				height: 100%;
				margin: 0px;
				font-size: 30rpx;
				border: none;
			}
		}
	}

	.family_list {
		padding-top: 0px;
		background: #fff;

		.family_item {
			background: rgb(250, 250, 250);
			display: flex;
			margin-top: 30rpx;

			&:last-child {
				margin-bottom: 0px;
			}

			padding: 30rpx;
			border-radius: 16rpx;
			align-items: center;
			justify-content: space-between;

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
					border: 1px solid linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);
					background: rgba(191, 191, 191, .1);
					color: linear-gradient(92.55deg, #5cc376 0%, #51b383 100%);
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
</style>
