import config from "../config.js";
import local from "../local.js"; 
const request = (options) => {
    return new Promise((resolve, reject) => {
		//var token=uni.getStorageSync("token");
		let sessionId = uni.getStorageSync("sessionId");
		console.log(sessionId)
		var header={
			'Content-Type':'application/json;charset=UTF-8',
			'Cookie': 'JSESSIONID=' + sessionId || ''
			//'authorization-token': token
		}; 
		if(options.method=='POST'){
			Object.assign(header,{'Content-Type':'application/x-www-form-urlencoded'} ) 
		};

        uni.request({
            method: options.method,
            url: config.baseUrl + options.url,
            data: options.data,
            header: header,
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;   
		    console.log(res)
			if(res==undefined){
				uni.showToast({
				 icon: 'none',
				 title:'登录失效',
				 }
				 );
				 setTimeout(function(){
					 uni.reLaunch({
					 	url: '/pages/login/login'
					 })	
				 },1000)
				
			};
			if(res.statusCode=='404'){
				uni.showToast({
				 icon: 'none',
				 title:'登录失效',
				 }
				 );
				 setTimeout(function(){
					 uni.reLaunch({
					 	url: '/pages/login/login'
					 })	
				 },1000)
			};
            resolve(res.data); 
			
			// if(typeof(res.data) == 'string') {
				
			// 	if(res.data.slice(30,35) == 'alert'){
			// 		uni.reLaunch({
			// 			url: '/pages/login/login'
			// 		})	
			// 	}
			// }
        }).catch(error => {
            let [err, res] = error;
            reject(err);
			uni.showToast({
				title:"服务器请求错误",
				mask:false
			}); 
        })
    });
}
export default{
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return  request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return  request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return  request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return request(options)
	}
}

