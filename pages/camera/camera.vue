<template>
	<view class="hctz-content" id="wrap" style="height: 100vh;">
		<uni-header1 :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;" @click="back"></icon>
		</uni-header1>
		<view class="camera" style="width: 100%;height: 500rpx;position: relative;">
			<camera device-position="back" flash="off" binderror="error" style="width:100%;height:500rpx;" class="camera"></camera>
			<view class="mask">
				身份证放置区域
			</view>
		</view> 
		<view class="sbBtn" @click="takephoto()">开始智能识别</view>
	</view>
</template>

<script>
	import utils from '../../utils/ocrId.js';
	export default {
		data() {
			return {
				title: "农户身份识别",
				base64: '',
				baidutoken: ""
			}
		},
		methods: {
			takephoto() {
				var _this = this;
				uni.showLoading({
					title:'正在识别...'
				});
				const ctx = wx.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => { 
						//图片base64编码
						wx.getFileSystemManager().readFile({
							filePath: res.tempImagePath, //选择图片返回的相对路径
							encoding: 'base64', //编码格式
							success: res => { //成功的回调  
							    console.log(res)
								_this.base64 = res.data; 
								utils.ocrId(res.data).then(res=>{ 
									if (res.statusCode==200) {
										uni.hideLoading();
										_this.$toast('识别成功');
										uni.$emit('camera',{
											baseUrl:_this.base64,
											name:res.data.words_result['姓名'].words,
											idCard:res.data.words_result['公民身份号码'].words
										}); 
										setTimeout(function(){
											uni.navigateBack({
												delta:1
											})
										},1000)
									}else{
										_this.$toast('识别失败');
									} 
								}).catch(err=>{
									uni.hideLoading(); 
									_this.$toast('识别失败'); 
								})
							} 
							 
						})
					},
					fail() {
						uni.hideLoading(); 
						wx.showToast({
							title: '请重试',
							icon: 'loading',
							duration: 500
						})
					}
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sbBtn {
		margin: 30rpx;
		height: 100rpx;
		display: flex;
		background: #576bde;
		color: #fff; 
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		margin-top: 30rpx;
	}
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		left: 0;
		top: 0;
		font-size: 30rpx;
		display: flex;
		color: #fff;
		justify-content: center;
		align-items: center;
		border: 50rpx solid rgba(0,0,0,.1);
	}
</style>
