import Vue from 'vue'
import App from './App'
import store from "./store" 
Vue.config.productionTip = false
Vue.prototype.$store=store;

import api from './http/httpUtils.js'
// 全局挂载后使用
Vue.prototype.$api = api

//请求加载组件
import requestLoading from './components/loading/loading.vue'; 
import uniHeader from './components/uni-header/uni-header.vue'; 
import uniHeader1 from './components/uni-header1/uni-header.vue'; 
import uniHeader2 from './components/uni-header2/uni-header.vue'; 
// import archives from './pages/archives/archives.vue'; 
// import functions from './pages/function/function.vue'; 
// import statistics from './pages/statistics/statistics.vue'; 
// import user from './pages/user/user.vue'; 
// import tabbar from './components/tabBar/tabBar.vue';  
//组件挂载到全局，方便每个页面使用
 Vue.component('request-loading', requestLoading); 
 Vue.component('uni-header', uniHeader); 
 Vue.component('uni-header1', uniHeader1); 
  Vue.component('uni-header2', uniHeader2); 
// Vue.component('archives', archives); 
// Vue.component('functions', functions);
// Vue.component('statistics', statistics);
// Vue.component('user', user);
// Vue.component('tabbar', tabbar); 
//挂载全局显示/隐藏请求加载动画
function showLoading(){
	store.commit('request_show_loading');
}
function hideLoading(){
	store.commit('request_hide_loading');
}
Vue.prototype.$showLoading = showLoading; //全局显示动画可以 this.$showLoading();
Vue.prototype.$hideLoading = hideLoading; //全局隐藏动画可以 this.$hideLoading();
//引入封装的方法 
Vue.prototype.$toast = (title, duration = 1500) => uni.showToast({
 icon: 'none',
 title,
 duration
});
// 跳转底部 tabbar 对应的页面
Vue.prototype.$switchTab = (url) => uni.switchTab({
 url: '/pages' + url
});
// 关闭其它页面，跳转
Vue.prototype.$relaunch = (url) => uni.reLaunch({
 url: '/pages' + url
});
Vue.prototype.$navigateTo = (url) => uni.navigateTo({ 
	 
  url: '/pages' + url 
})
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
