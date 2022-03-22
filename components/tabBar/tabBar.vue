<template>
	<view class="footer">
		<view class="footer_item" v-for="(item,index) in tabber" :class="tabIndex==index?'tabbar2':'tabbar1'" :key='index'
		 @click="changeTab(index)">
			<text :class="item.icon2"></text>
			<view class="tabber_title">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabIndexs:{
				type:Number
			},
			tabbers:{
				type:Array
			}
		},
		data() {
			return {
				tabber:[] ,
				tabIndex:0,
			};
		},
		watch:{
			tabIndexs:function(value){
				this.tabIndex=this.tabIndexs;
			},
			tabbers:function(value){
				this.tabber=this.tabbers;
			}
		},
		mounted() {
			this.tabber=this.tabbers;
			this.tabIndex=this.tabIndexs;
		},
		methods:{
			changeTab(index){
				this.$emit('changeTabs',index); 
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		width: 100%;
		height: 120rpx;
		background: #E7EBED;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 30rpx;
	
		.tabbar2 {
			color: red
		}
	
		.tabbar1 {
			color: #333
		}
	
		.footer_item {
			height: 100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
	
			.active {}
	
			.tabber_title {
				margin-top: 0rpx;
			}
		}
	}
</style>
