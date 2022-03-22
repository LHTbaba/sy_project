<template>
	<view>
		<div class="pick poster" id="poster" style="width: 200px;height: 200px;" ref='posters'>
			<!-- 这里边是你需要保存的页面样式，需要什么样式就写什么样的就行，都放在这里边 -->
			<view class="">
				文字
			</view>
			<image src="../../static/logo.png" mode="" style="width: 100%;height: 100px;"></image>
		</div>
		<image :src="base64" mode="" style="width: 200px;height: 100px;"></image>
		<button type="default" @click="toImg">生成海报</button>
	</view>
</template>

<script>
	import html2canvas from 'html2canvas';
	export default {
		data() {
			return {
				base64: '',
				height:'',
				width:''
			}
		},
		onLoad() {},
		mounted() {
			var _this=this;
			const query = uni.createSelectorQuery().in(this);
			query.select('#poster').boundingClientRect(data => {
				_this.height = data.height;
				_this.width = data.width;
			}).exec();
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