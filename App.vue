<script>
	export default {
		onLaunch: function() {
			var _this=this;
			uni.getSystemInfo({
				success: function(e) { 
					console.log(e.statusBarHeight);
					_this.$store.commit('setBarHeight',e.statusBarHeight);
				}
			}); 
		},
		onShow: function() {
			console.log('App Show')
			uni.hideTabBar({
				success() {
					
				}
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './static/css/iconfont.css';
</style>
