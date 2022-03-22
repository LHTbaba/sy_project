<template>
	<view class="request-loading-view" v-if="loadingShow">
		<view class="loading-view"> 
			<view class="loading"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		computed: {
			//计算属性判断vuex中的显示状态
			loadingShow() {
				return this.$store.state.requestLoading;
			}
		}
	}
</script>

<style lang="scss" scoped>
   .request-loading-view {
   	position: absolute;
   	top: 0;
   	left: 0;
   	width: 100%;
   	height: 100%;
   	z-index: 99;
   	background-color: rgba(255, 255, 255, 1);
   	display: flex;
   	justify-content: center;
   	align-items: center;
   }
   .loading-view {
   	width: 160upx;
   	height: 160upx;
   	border-radius: 20upx;
   	display: flex;
   	justify-content: center;
   	align-items: center;
   }
   
   /* 动画样式 */
   .loading {
   	border: 5upx solid rgba(0, 0, 0, 0.01);
   	border-radius: 50%;
   	border-top: 5upx solid blue;
   	border-right: 5upx solid blue;
   	border-bottom: 5upx solid blue;
   	width: 60upx;
   	height: 60upx;
   	-webkit-animation: spin 1.4s linear infinite;
   	animation: spin 1.4s linear infinite;
   }
   
   @-webkit-keyframes spin {
   	0% {
   		-webkit-transform: rotate(0deg);
   	}
   
   	100% {
   		-webkit-transform: rotate(360deg);
   	}
   }
   
   @keyframes spin {
   	0% {
   		transform: rotate(0deg);
   	}
   
   	100% {
   		transform: rotate(360deg);
   	}
   }
</style>
