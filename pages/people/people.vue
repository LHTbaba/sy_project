<template>
	<view class="login" id="wrap">
		<uni-header2 :title="title" id='header'>
		</uni-header2>
		<view class="content" :style="{height:scrollerHeight}">
			<image src="../../static/img/people_bg.png" style="position: absolute;width: 100%;height: 120%;
			left: 0;top: 0;" mode=""></image>
			<view class="inner_box">
				<view class="inner_title" style="z-index: 99;">
					角色选择
				</view>
				<view class="inner_item" @click="toLogin('1')">
					<image src="../../static/img/biankuang.png" class="bg_img" mode=""></image>
					<image class="logo" src="../../static/img/ganbu.png" mode=""></image>
					<text class="inner_text">我是干部</text>
				</view>
				<view class="inner_item" @click="toLogin('2')">
					<image src="../../static/img/biankuang.png" class="bg_img" mode=""></image>
					<image class="logo" src="../../static/img/nonghu.png" mode=""></image>
					<text class="inner_text">我是农户</text>
				</view>
			</view>
		</view> 
	</view>
</template>

<script>
	import config from "../../config.js";
	import storage from "../../static/js/storage.js"
	// import tfggVerify from "../../components/tfgg-verify/tfggverify.vue"
	//import JsEncrypt from "../../static/js/jsencrypt.js"
	var _this;
	export default {
		// components: {
		// 	tfggVerify
		// },
		data() {
			return {
				loginName: '',
				password: '',
				authcode: '',
				codeSrc: '',
				verCode: "",
				width: ' ',
				height: ' ',
				title: '选择角色',
				checked: true,
				src: "",
				scrollerHeight: '', //路径点集合 
				sessionId: ''
			}
		},
		onShow() {
			// _this = this;
			// const query = uni.createSelectorQuery().in(this); 
			// query.select('#imgCanvas').boundingClientRect(data => {
			// 	console.log(data)
			// 	_this.width = data.width;
			// 	_this.height = data.height;
			// }).exec();
			// setTimeout(function() {
			// 	_this.init();
			// }, 1000) 
		},
		onLoad() {
			
		},
		mounted() {
			this.getHeight();  
		},
		methods: { 
			toLogin(type){
				if(type=="1"){
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					uni.navigateTo({
						url:'../peopleIndex/peopleIndex'
					})
				}
			},
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height;
				}).exec();
				_this.$nextTick(function() {
					query.select('#header').boundingClientRect(data => {
						_this.scrollerHeight = (_this.scrollerHeight - data.height)+'px';
					}).exec();
				});
				 
			}, 

		}
	}
</script>

<style scoped lang="scss">
	.login {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: rgb(13, 34, 68);
	}
    .content{
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		position: relative;
		.inner_box{
			width: 356rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.inner_title{
				font-size: 60rpx;
				font-weight: bold;
				margin-bottom: 60rpx;
				background: linear-gradient(180deg, rgba(2, 241, 253, 1) 0%, rgba(4, 136, 197, 1) 100%);
			    -webkit-background-clip: text !important;
			    -webkit-text-fill-color: transparent;
			}
			.inner_item{
				width: 356rpx;
				height:316rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 60rpx;
				flex-direction: column; 
				 position: relative;
				 .bg_img{
					 position: absolute;
					 width: 100%;
					 height: 100%;
					 left: 0;
					 top: 0;
				 }
				.logo{
					width: 120rpx;
					height: 120rpx;
					margin-bottom: 40rpx; 
				}
				.inner_text{
					color: rgb(210, 238, 255);
					font-size: 28rpx;
				}
			}
		}
	}
	 
</style>
