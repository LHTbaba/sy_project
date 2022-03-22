<template>
	<view class=""> 
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;" @click="back"></icon>
		</uni-header>
		<view class="indeximg" style="width: 100vw;height: 500rpx;position: relative;" id="canvas_wrap"  > 
			<canvas canvas-id="firstCanvas" id="firstCanvas" style="width: 100vw;height: 500rpx; position: absolute;left:0;top: 0;z-index: -1;"></canvas>
			<view id="canvas_wrap" style="padding: 30rpx;background: #fff;" v-if="bools">
				<canvas class="mycanvas" id="mycanvas" style="width: 100%;height: 400rpx;" canvas-id="mycanvas" @touchstart="touchstart"
				 @touchmove="touchmove"></canvas>
				<view class="operate_box" style="width: 100%;text-align: right;margin-top: 20rpx;">
					<text @click="qdCanvas()" class="qdBtn">确认</text>
					<text @click="qxCanvas()" class="qxBtn">取消</text>
				</view>
			</view>
		</view>
		<view class="operate_box" v-if="!bools" style="width: 100%;text-align: right;margin-top: 20rpx;">
			<text @click="qdCanvas()" class="qdBtn">确认</text>
			<text @click="qxCanvas()" class="qxBtn">取消</text>
		</view>
	</view>  
</template>

<script>
	export default {
		data() {
			return {
				base64: '',
				height: '',
				width: '',
				imageUrl: "",
				ctx: '', //绘图图像
				ctx2: '', //绘图图像
				bools: true,
				points: [],
				title: '农户满意签名',
				scrollerHeight: '', //路径点集合
				left: '',
				canvasw: '',
				canvash: '',
				top: ''
			}
		},
		onLoad() {
			this.ctx = uni.createCanvasContext("mycanvas", this); //创建绘图对象
			this.ctx1 = uni.createCanvasContext("firstCanvas", this); //创建绘图对象
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
		},
		mounted() {
			var _this = this;
			//  uni.downloadFile({
			// 	url: "../../static/img/sm1.png",
			// 	success:function(res){
			// 		console.log(res.tempFilePath)
			// 		_this.imageUrl = res.tempFilePath
			// 	}
			// })
			// var ctx = uni.createCanvasContext("firstCanvas") // 使用画布创建上下文 图片
			uni.getImageInfo({
				src: config.baseUrl+'/image/sm1.png',
				success(res) {
					console.log(res.path)
					_this.ctx1.restore();
					_this.ctx1.drawImage(res.path, 0, 0, _this.canvasw, _this.canvash / 2) // 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）

					// _this.ctx1.draw() ;

				},
				fail(err) {
					console.log(err)
				}
			});
			_this.$nextTick(function() {
				console.log(_this.canvash)
				var date=new Date();
				var year=date.getFullYear();
				var month=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()+1;
				var day=date.getDate()<10?'0'+date.getDate():date.getDate();
				// ctx.draw()//绘制
				_this.ctx1.fillText(year+'年'+month+'月'+day+'日', _this.canvasw - 100, _this.canvash - 20); //文字内容、x坐标，y坐标
				_this.ctx1.font = 'normal 20px STXingkai'; // 字体
				_this.ctx1.setFontSize(10) //设置字体大小，默认10
				_this.ctx1.setFillStyle('#DD524D') //文字颜色：默认黑色
				_this.ctx1.save(); //保存 
			});
		},
		methods: {
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
			back(){
				uni.navigateBack({
					delta:1
				})
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
			qdCanvas() {
				var _this = this;
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: function(res) {
						_this.bools = false;
						console.log(res.tempFilePath);
						_this.ctx1.restore();
						_this.ctx1.drawImage(res.tempFilePath, _this.canvasw - 200, _this.canvash / 2, 200, 100) // 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）

						_this.ctx1.draw();

					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
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
</style>
