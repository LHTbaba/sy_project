<template>
	<view class="content" style="width: 100vw;height: 100vh;overflow: auto;">
		<view class="wrap" id='wrap' style="position: relative;">
			<uni-header :title="title" id='header'>
				<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;" @click="back"></icon>
			</uni-header>
			<view id="canvas_wrap" style="padding: 30rpx;background: #fff;">
				<canvas class="mycanvas" id="mycanvas" style="width: 100%;height: 400rpx;" canvas-id="mycanvas" @touchstart="touchstart"
				 @touchmove="touchmove"></canvas>
				<view class="operate_box" style="width: 100%;text-align: right;margin-top: 20rpx;">
					<text @click="qdCanvas()" class="qdBtn">确认</text>
					<text @click="qxCanvas()" class="qxBtn">取消</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from "../../config.js";
	export default {
		data() {
			return {
				barheight: '',
				ctx: '', //绘图图像
				points: [],
				title: '农户满意签名',
				scrollerHeight: '', //路径点集合
				left: '',
				canvasw: '',
				canvash: '',
				top: ''
			}
		},
		beforeDestroy() {

		},
		onLoad() {
			this.$hideLoading();
			this.ctx = uni.createCanvasContext("mycanvas", this); //创建绘图对象 
			//设置画笔样式
			var _this = this;
			const query = uni.createSelectorQuery().in(this);
			query.select('#canvas_wrap').boundingClientRect(data => {
				console.log(data);
				_this.canvasw = data.width;
				_this.canvash = data.height;
			}).exec();
			this.ctx.lineWidth = 4;
			this.ctx.lineCap = "round";
			this.ctx.lineJoin = "round";
			this.ctx.fillStyle = "#fff";
			console.log(_this.canvasw)
			this.$nextTick(function() {
				_this.ctx.fillRect(0, 0, _this.canvasw, _this.canvash);
			})
		},
		created() {

		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			var _this = this;
			_this.getHeight();
		},
		methods: {
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					//console.log(data);
					_this.scrollerHeight = data.height;
				}).exec();
				// console.log(_this.scrollerHeight);
				_this.$nextTick(function() {
					console.log(_this.scrollerHeight);
					query.select('#header').boundingClientRect(data => {
						//console.log(data);
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				});
			},
			//触摸开始，获取到起点
			touchstart(e) {
				e.preventDefault()
				console.log(e.changedTouches[0].x)
				console.log(e.changedTouches[0].y)
				let startX = e.changedTouches[0].x;
				let startY = e.changedTouches[0].y;
				let startPoint = {
					X: startX,
					Y: startY
				};
				this.points.push(startPoint);
				//每次触摸开始，开启新的路径
				this.ctx.beginPath();
				this.ctx.moveTo(startX, startY)
			},

			//触摸移动，获取到路径点
			touchmove(e) {
				e.preventDefault()
				let moveX = e.changedTouches[0].x;
				let moveY = e.changedTouches[0].y;
				this.ctx.lineTo(moveX, moveY);
				this.ctx.stroke();
				this.ctx.draw(true);
				this.ctx.moveTo(moveX, moveY)
			},
			qdCanvas() {
				let sessionId = uni.getStorageSync("sessionId");
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: function(res) {
						console.log(res);
						uni.uploadFile({
							url: config.baseUrl + '/tz/tz!tzUpload2.do?c.sqlKey=FZFP_ZAA.ADD_FILE&c.QTYPE=930',
							header: {
								"Content-Type": "multipart/form-data",
								"accept": 'application/json',
								'Cookie': 'JSESSIONID=' + sessionId
							},
							filePath: res.tempFilePath, // uni.chooseImage函数调用后获取的本地文件路劲
							name: 'myFile',
							success: (res) => {
								console.log(res.data);
								var data = JSON.parse(res.data);
								var obj = {
									path: config.baseUrl + '/file/file-download.do?rid=' + data.QATTACHMENTID,
									rid:data.QATTACHMENTID,
									canvasBool: true
								};
								uni.$emit('canvasURL', obj);
								uni.navigateBack({
									delta: 1
								});
								// var obj = {
								// 	name: "",
								// 	type: "",
								// 	url: config.baseUrl + '/file/file-download.do?rid=' + data.QATTACHMENTID,
								// 	rid: data.QATTACHMENTID
								// };
								// _this.zghList.push(obj)

							},
						})
						// wx.getFileSystemManager().readFile({
						//           filePath: res.tempFilePath, //选择图片返回的相对路径
						//           encoding: 'base64', //编码格式
						//           success: res => { //成功的回调
						// 		  var obj={
						// 		  	path:'data:image/png;base64,' + res.data,
						// 		  	canvasBool:true
						// 		  };
						// 		  uni.$emit('canvasURL',obj);
						// 		  uni.navigateBack({
						// 		   	delta:1
						// 		  })
						//             // console.log()
						//           }
						//         })   
						// let path =wx.arrayBufferToBase64(res.tempFilePath); 
						// console.log(path)

					}
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			qxCanvas() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						let canvasw = res.windowWidth;
						let canvash = res.windowHeight;
						that.ctx.clearRect(0, 0, canvasw, canvash);
						that.ctx.draw(true);
					},
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.sf_radio {
		padding: 0px 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		box-shadow: 0px 1px 0px 0px #EDEDED, 0px -1px 0px 0px #EDEDED;

		.sf_radio_item {
			width: 48%;
			height: 80rpx;
			border-radius: 12rpx;
			font-size: 28rpx;
			display: flex;
			background: #fff;
			border: 1px solid #dfdfdf;
			margin: 20rpx 0px;
			align-items: center;

			.wj_circle {
				width: 24rpx;
				height: 24rpx;
				padding: 8rpx;
				border: 1px solid #dfdfdf;
				border-radius: 50%;
				margin: 0px 20rpx;
				background: #fff;

				.inner_circle {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

		}

		.wj_active {
			border-color: #446BCF;
			background: rgba(68, 107, 207, 0.17);
			color: #446BCF;
		}

		.wj_active .wj_circle {
			border-color: #446BCF;
		}

		.wj_active .inner_circle {
			background: #446BCF;
		}
	}

	.mask {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .3);
	}

	.qdBtn {
		text-align: center;
		font-size: 24rpx;
		color: #333;
		margin-right: 20rpx;
		padding: 10rpx 20rpx;
		border: 1px solid #ededed;

	}

	.qxBtn {
		text-align: center;
		font-size: 24rpx;
		color: #333;
		margin-right: 20rpx;
		padding: 10rpx 20rpx;
		border: 1px solid #ededed;
	}

	.drawList {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		transform: translateY(300rpx);
		transition: all .3s linear;
		z-index: 999;
	}

	;

	.fk_qm,
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
			cursor: pointer;
		}
	}

	.drawShow {
		transform: translateY(0rpx);
		transition: all .3s linear;
	}

	.dramItem {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		border-bottom: 1px solid #dfdfdf;
		color: #333;
	}

	.dramItem:last-child {
		border-bottom: none;
	}

	input {
		width: 240rpx;
	}

	input:disabled {
		background: #CCCCCC;
	}

	.wj_check {
		width: 40rpx;
		height: 40rpx;
		margin: 0px 20rpx;
		// background: url(../../static/checked1.png) center no-repeat;
		background-size: 100% 100%;
	}

	.wj_active {
		// background: url(../../static/img/icons-checked2.png) center no-repeat;
		background-size: 100% 100%;
	}

	::-webkit-scrollbar {
		display: none;
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
			border: 2px dashed #CCCCCC;
			display: flex;
			float: left;
			margin-right: 20rpx;
			margin-top: 20rpx;
			justify-content: center;
			align-items: center;
		}
	}

	.subBtn {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		color: #fff;
		background: #446BCF;
	}

	.pageNum {
		width: 100%;

		.bt_title {
			padding: 0px 30rpx;
			height: 96rpx;
			font-size: 32rpx;
			color: #666;
			display: flex;
			align-items: center;
		}

		.tb_item {
			padding: 0px 30rpx;
			box-shadow: 0px 1px 0px 0px #EDEDED, 0px -1px 0px 0px #EDEDED;
			height: 96rpx;
			background: #fff;
			font-size: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.tb_text {
				height: 100%;
				display: flex;
				align-items: center;
			}

			.tb_ipt {
				height: 100%;
				display: flex;
				align-items: center;

				.ipt_text {
					border: none;
					height: 100%;
					text-align: right;
					color: #666666;
				}
			}
		}
	}

	.pageBox {
		padding: 0px 30rpx;
		height: 96rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;

		// .arrow_left {
		// 	display: inline-block;
		// 	width: 28px;
		// 	height: 28px;
		// 	background: url(../../static/img/icons-left.png) no-repeat;
		// 	background-size: 100% 100%;
		// }

		.pageMiddle {
			height: 100%;
			display: flex;
			align-items: center;
			font-size: 36rpx;

			// .arrow_middle {
			// 	display: inline-block;
			// 	width: 20px;
			// 	height: 20px;
			// 	background: url(../../static/img/icons-flow.png) no-repeat;
			// 	background-size: 100% 100%;
			// }
		}

		// .arrow_right {
		// 	display: inline-block;
		// 	width: 28px;
		// 	height: 28px;
		// 	background: url(../../static/img/icons-right.png) no-repeat;
		// 	background-size: 100% 100%;
		// }
	}

	textarea {
		border-radius: 6rpx;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(68, 107, 207, 0.17);
		box-sizing: border-box;
		padding-top: 20rpx;
		padding-left: 20rpx;
		margin: 20rpx 0px;
	}

	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		display: none
	}

	.content {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .05);
		overflow: hidden;

		.wrap {
			width: 100%;
			height: 100%;
			background: #f7f7f7;

			.wj_list {
				width: 100%;

				.wj_item {
					width: 100%;
					color: #333;
					margin: 10px 0px;

					.wj_box {
						padding: 0px 20rpx;
						height: 80rpx;
						display: flex;
						align-items: center;
						background: #fff;
						font-size: 28rpx;
					}

					.wj_below {
						padding: 20rpx 30rpx;
						background: #fff;

						.inner_list {
							width: 100%;

							.inner_item {
								width: calc(100% - 60rpx);
								margin-left: 60rpx;

								.inner_radio_list {
									width: calc(100% - 60rpx);
									margin-left: 60rpx;

									.inner_radio_item {
										width: 100%;
										height: 80rpx;
										border-radius: 12rpx;
										font-size: 28rpx;
										display: flex;
										background: #fff;
										border: 1px solid #dfdfdf;
										margin-bottom: 20rpx;
										align-items: center;

										.inner_circle {
											width: 24rpx;
											height: 24rpx;
											padding: 8rpx;
											border: 1px solid #dfdfdf;
											border-radius: 50%;
											margin: 0px 20rpx;
											background: #fff;

											.inner_radio_circle {
												width: 100%;
												height: 100%;
												border-radius: 50%;
											}
										}

									}

									.wj_active {
										border-color: #446BCF;
										background: rgba(68, 107, 207, 0.17);
										color: #446BCF;
									}

									.wj_active .inner_circle {
										border-color: #446BCF;
									}

									.wj_active .inner_radio_circle {
										background: #446BCF;
									}
								}

								.inner_box {
									width: 100%;
									height: 80rpx;
									border-radius: 12rpx;
									font-size: 28rpx;
									display: flex;
									background: #fff;
									border: 1px solid #dfdfdf;
									margin-bottom: 20rpx;
									align-items: center;

									.inner_check {
										width: 40rpx;
										height: 40rpx;
										margin: 0px 20rpx;
										// background: url(../../static/checked1.png) center no-repeat;
										background-size: 100% 100%;
									}

								}

								.wj_active {
									border-color: #446BCF;
									background: rgba(68, 107, 207, 0.17);
									color: #446BCF;
								}

								.wj_active .inner_check {
									// background: url(../../static/img/icons-checked2.png) center no-repeat;
									background-size: 100% 100%;
								}
							}
						}

						.radio_below_item {
							width: 100%;
							height: 80rpx;
							border-radius: 12rpx;
							font-size: 28rpx;
							display: flex;
							background: #fff;
							border: 1px solid #dfdfdf;
							margin-bottom: 20rpx;
							align-items: center;

							.wj_circle {
								width: 24rpx;
								height: 24rpx;
								padding: 8rpx;
								border: 1px solid #dfdfdf;
								border-radius: 50%;
								margin: 0px 20rpx;
								background: #fff;

								.inner_circle {
									width: 100%;
									height: 100%;
									border-radius: 50%;
								}
							}

							.wj_check {
								width: 40rpx;
								height: 40rpx;
								margin: 0px 20rpx;
								// background: url(../../static/checked1.png) center no-repeat;
								background-size: 100% 100%;
							}



						}

						.wj_active {
							border-color: #446BCF;
							background: rgba(68, 107, 207, 0.17);
							color: #446BCF;
						}

						.wj_active .wj_circle {
							border-color: #446BCF;
						}

						.wj_active .inner_circle {
							background: #446BCF;
						}

						.wj_active .wj_check {
							// background: url(../../static/img/icons-checked2.png) center no-repeat;
							background-size: 100% 100%;
						}
					}
				}


			}
		}

	}

	.mycanvas {
		width: 100%;
		height: 800rpx;
		border-radius: 6rpx;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(68, 107, 207, 0.17);
		box-sizing: border-box;
		padding-top: 20rpx;
		padding-left: 20rpx;
		background: #fff;
	}

	.hui_lis {
		color: #e1e1e1 !important;
	}
</style>
