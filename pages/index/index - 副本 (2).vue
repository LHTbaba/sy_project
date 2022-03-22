<template>
	<view class="indeximg"> 
			<canvas   canvas-id="firstCanvas" style="width: 100vw;height: 450px; position: absolute;left:0;top: 0;z-index: -1;"></canvas>
		</view>
</template>

<script> 
	export default {
		data() {
			return {
				base64: '',
				height:'',
				width:'',
				imageUrl:""
			}
		},
		onLoad() {},
		mounted() {
			var _this=this;
			 uni.downloadFile({
				url: "../../static/img/sm1.png",
				success:function(res){
					console.log(res.tempFilePath)
					_this.imageUrl = res.tempFilePath
				}
			})
			var ctx = uni.createCanvasContext("firstCanvas") // 使用画布创建上下文 图片
			uni.getImageInfo({
				src: 'http://game.gtimg.cn/images/yxzj/act/a20160510story/relavance/heroes/hero48.jpg' ,
				success(res) {
					console.log(res.path) 
					ctx.restore();
					ctx.drawImage(res.path, 0, 0, 375,100)// 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）
				 
					ctx.draw() ;
					
				},fail(err) {
					console.log(err)
				}
			}) ;
			// ctx.draw()//绘制
			ctx.fillText("内sdfdfdssdfdsfd容",240,300);//文字内容、x坐标，y坐标
			ctx.font = 'normal 20px STXingkai'; // 字体
			ctx.setFontSize(10) //设置字体大小，默认10
			ctx.setFillStyle('#DD524D') //文字颜色：默认黑色
			ctx.save();//保存 
		},
		methods: {
			toImg() {
				// 使页面滑到顶部，避免顶部出现白边
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				}); 
				var _this=this;
				console.log(document.getElementById('poster')) 
				html2canvas(query, {
					width: _this.width, //dom 原始宽度
					height: _this.height,
					scrollY: 0, // html2canvas默认绘制视图内的页面，需要把scrollY，scrollX设置为0
					scrollX: 0,
					useCORS: true, //支持跨域，但好像没什么用
				}).then((canvas) => {
					// 将生产的canvas转为base64图片
					this.base64 = canvas.toDataURL('image/png')
				});
			},
		}
	}
</script>

<style>

</style> 