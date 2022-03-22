<template>
	<view class="header" :style="{paddingTop:barheight+'px'}" id="header"> 
		<view class="header_left">
			<slot name="header_left"></slot>
		</view>
		<view class="header_middle" :style="{paddingTop:barheight+'px'}">
			{{title}}
		</view>
		<view class="header_right">
			<slot name="header_right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barheight:''
			};
		},
		props:{
			title:{
				type:String
			}
		},
		mounted() {
			if(this.title.length>6){
				this.title = this.title.substr(0, 6) + '....';
			};  
			this.barheight = this.$store.state.barHeight;
		},
		methods:{
			
		}
	}
</script>

<style scoped  lang="scss">
  .header { 
	width: calc(100vw - 60rpx);
  	height: 100rpx;
  	display: flex;  
	padding-left: 30rpx;
	padding-right: 30rpx;
	position: relative;
	z-index: 999;
  	justify-content: space-between;
	align-items: center;
  	background:rgb(13, 34, 68);
	font-family: HappyZcool-2016;
     font-weight: medium;
  	// border-bottom: 1px solid #dfdfdf;
  	color: #fff;
  	align-items: center;
  	font-size: 36rpx; 
	.header_left,.header_right{
		position: relative;
		z-index: 10;
	}
	.header_left,.header_middle,.header_right{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header_middle{
		color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		box-sizing: border-box;
		height: 100%;
	}
  } 
</style>
