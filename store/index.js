import Vue from 'vue';
import Vuex from 'vuex';
import local from '@/local.js';
import http from '@/http/interface.js';
Vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		forcedLogin:false,//是否需要强制登录
		zhName: local.getUserName()||'',
		phone: local.getPhone()||'',
		useId:local.getUserId()||'',
		token:'',
		barHeight:"",
		requestLoading: true, //加载等待是否显示
		list:[],
	},
	
	mutations:{//触发用commit
		//显示请求加载动画
		request_show_loading(state) {
			state.requestLoading = true;
		},
		//隐藏请求加载动画
		request_hide_loading(state) {
			state.requestLoading = false;
		},
		login(state, sessionId) {
			uni.setStorageSync('sessionId', sessionId)
			//local.setLoginInfo({userName,token})
			//登陆后刷新一下客户信息 
			//state.userName = userName 
			//http.refreshToken(token)
			state.token = sessionId
		}, 
		setUser(state,userName){
			local.setUserName(userName);
			state.userName=userName
		},
		setPhone(state,phone){ 
			local.setPhone(phone);
			state.phone=phone
		},
		setUserId(state,userId){ 
			local.setUserId(userId);
			state.userId=userId
		},
		setBarHeight(state,barHeight){
			state.barHeight='';
			state.barHeight=barHeight  
		},
		logout(state) {
			console.log(11111)
			// local.setLoginInfo("");
			//登陆后刷新一下客户信息 
			state.userName = ""
			//http.refreshToken(token)
			state.hasLogin = false
			//console.log(11111)
		},
	},
	actions:{
		login({commit},{userName, token}){
			commit("login",{userName, token})
		},
		logout({commit}){
			commit('logout')
		}
	}
}); 
export default store