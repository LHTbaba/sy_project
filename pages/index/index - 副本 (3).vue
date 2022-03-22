<template>
	<view class="indeximg"  style="width: 100vw;height: 500rpx;" id="canvas_wrap"> 
			<canvas   canvas-id="firstCanvas" id="firstCanvas"  style="width: 100vw;height: 500rpx; position: absolute;left:0;top: 0;z-index: -1;"></canvas>
		  <view id="canvas_wrap" style="padding: 30rpx;background: #fff;" v-if="bools">
		  	<canvas class="mycanvas" id="mycanvas" style="width: 100%;height: 400rpx;" canvas-id="mycanvas" @touchstart="touchstart"
		  	 @touchmove="touchmove"></canvas>
		  	<view class="operate_box" style="width: 100%;text-align: right;margin-top: 20rpx;">
		  		<text @click="qdCanvas()" class="qdBtn">确认</text>
		  		<text @click="qxCanvas()" class="qxBtn">取消</text>
		  	</view>
		  </view>
		</view>
	
</template>

<script> 
	export default {
		data() {
			return {
				base64: '',
				height:'',
				width:'',
				imageUrl:"",
				ctx: '', //绘图图像
		        ctx2: '', //绘图图像
				bools:true,
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
			var _this=this;
			//  uni.downloadFile({
			// 	url: "../../static/img/sm1.png",
			// 	success:function(res){
			// 		console.log(res.tempFilePath)
			// 		_this.imageUrl = res.tempFilePath
			// 	}
			// })
			// var ctx = uni.createCanvasContext("firstCanvas") // 使用画布创建上下文 图片
			uni.getImageInfo({
				src: 'http://game.gtimg.cn/images/yxzj/act/a20160510story/relavance/heroes/hero48.jpg' ,
				success(res) {
					console.log(res.path) 
					_this.ctx1.restore();
					_this.ctx1.drawImage(res.path, 0, 0, _this.canvasw,_this.canvash/2)// 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）
				 
					// _this.ctx1.draw() ;
					
				},fail(err) {
					console.log(err)
				}
			}) ;
			_this.$nextTick(function(){
				console.log(_this.canvash)
				// ctx.draw()//绘制
				_this.ctx1.fillText("内sdfdfdssdfdsfd容",_this.canvasw-100,_this.canvash-20);//文字内容、x坐标，y坐标
				_this.ctx1.font = 'normal 20px STXingkai'; // 字体
				_this.ctx1.setFontSize(10) //设置字体大小，默认10
				_this.ctx1.setFillStyle('#DD524D') //文字颜色：默认黑色
				_this.ctx1.save();//保存 
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
			qdCanvas() { 
				var _this=this;
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: function(res) {
						_this.bools=false;
						console.log(res.tempFilePath);
						_this.ctx1.restore();
						_this.ctx1.drawImage(res.tempFilePath,  _this.canvasw-200,_this.canvash/2 , 200,100)// 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）
												 	 
						_this.ctx1.draw() ; 
			
					}
				})
			}, 
		}
	}
</script>

<style>
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
   
</style> 