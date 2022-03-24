<template>
	<view class="login" id="wrap" style="width: 100vw;height: 100vh;">
		<!-- <uni-header2 :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;color: #fff;" @click="back"></icon>
		</uni-header2> -->
		<scroll-view :style="{height:scrollerHeight}" scroll-y="true">
			  <view class="top-img">
			  	<image class="img" src="../../static/img/fp_title.png"></image> 
			  	 
			  </view>
			  
			  <view class="main">
			  	<view class="login_title">
			  		欢迎登录
			  	</view>
			  	<view class="login_tips">
			  		账号
			  	</view>
			  	<view class="main-item">
			  		<!-- <view class="icon name_icon"></view> -->
			  		<input type="text" placeholder="请输入用户名" v-model="loginName" placeholder-class="placeholder" />
			  	</view>
			  	<view class="login_tips">
			  		密码
			  	</view>
			  	<view class="main-item">
			  		<!-- <view class="icon password_icon"></view> -->
			  		<input type="password" placeholder="请输入密码" v-model="password" placeholder-class="placeholder" />
			  	</view>
			  	<view class="login_tips">
			  		验证码
			  	</view>
			  	<view class="main-item code" style="overflow: hidden;">
			  		<view class="verification-code">
			  			<!-- <view class="icon code_icon"></view> -->
			  			<input type="text" placeholder="请输入验证码" v-model="authcode" placeholder-class="placeholder" />
			  		    <image id="imgCanvas" :src="src" @click="getCode()"></image> 
			  		</view>
			  	</view>
			  </view>
			  <!-- 滑动验证码 -->
			  <!-- <tfgg-verify></tfgg-verify> -->
			  <view class="button-box">
			  	<button type="default" class="login-btn" @click="login()">登录</button>
			  </view>
			  <view class="checked-box">
			  	<label class="keep-password">
			  		<checkbox class="keep-password" :checked="checked" @click="oncheckbox">记住密码</checkbox>
			  	</label>
			  </view>
		</scroll-view>
		
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
				title: '登录',
				checked: true,
				src: "",
				sessionId: '',
				scrollerHeight:""
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
			let userName = uni.getStorageSync("userName");
			let passWord = uni.getStorageSync("passWord");
			this.loginName = userName;
			this.password = passWord;
			// if (userName && passWord) {
				
			// }; 
			//this.getOpenId();
			//this.login(); yssheng 2020@Jzfp jxfp360000000000 jxfp123456
		},
		mounted() {
			this.getOpenId();
			this.getCode(); 
			this.getUser();
			this.getHeight();
		},
		methods: {
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height;
				}).exec(); 
				// _this.$nextTick(function() {
				// 	query.select('#header').boundingClientRect(data => {
				// 		_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
				// 	}).exec();
				// });
			},
			getUser(){
				var _this=this;
				if(!uni.getStorageSync('nickName')){
					wx.showModal({
					   title: '温馨提示',
					   content: '正在请求您的个人信息',
					   success(res) {
					     if (res.confirm) {
							 
					       wx.getUserProfile({
					       desc: "获取你的昵称、头像、地区及性别",
					       success: res => {
					          console.log(res);
							  uni.setStorageSync('nickName',res.userInfo.nickName);
							  uni.setStorageSync('avatarUrl',res.userInfo.avatarUrl);
					         // let wxUserInfo = res.userInfo;
					       },
					       fail: res => {
					       	 //拒绝授权
					         _this.$toast('您拒绝了请求');
					         return;
					       }
					     })} else if (res.cancel) {
					       //拒绝授权 showErrorModal是自定义的提示
					       _this.$toast('您拒绝了请求');
					       return;
					     }
					   }
					 }) 
				}
				
			},
			getOpenId() {
				//AppSecret小程序密钥：3a3d10db6b97a7ba8aacb68129bdacd1
				//wx188b70d363e4dc3e
				if(!uni.getStorageSync('openId')){
					uni.login({
							provider: 'weixin',
							success: res => {
								console.log('登录成功：', res);
								//获取临时登录凭证code
								this.Code = res.code;
								console.log(res);
								uni.request({
									url:config.baseUrl+'/GetOpenId?js_code='+res.code+'&tdsourcetag=s_pcqq_aiomsg',
									method:'GET', 
									success(res) {  
										console.log(res)
										uni.setStorageSync('openId',res.data.openid);
									}
								});
								//获取openid，session_key
					// 			let appid = "wx188b70d363e4dc3e" //需替换
					// 			let secret = "3a3d10db6b97a7ba8aacb68129bdacd1" //需替换
					// 			let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
					// 				'&js_code=' +
					// 				this.Code + '&grant_type=authorization_code';
					// 			uni.request({
					// 				url: url, // 请求路径
					// 				success: res => {
					// 					console.log(res);
					// 					if(res.statusCode=='200'){
					// 						uni.setStorageSync('openId',res.data.openid)
					// 					}
					// 					// console.log('openid session_key:', res.data);
					// 					// this.openid = res.data.openid
					// 					// this.session_key = res.data.session_key
					                    
					// 					// //获取用户信息
					// 					// uni.getUserInfo({
					// 					// 	provider: 'weixin',
					// 					// 	success: res => {
					// 					// 		console.log('获取用户信息', res);
					// 					// 		//解密encryptedData，可获取用户openId
					// 					// 		let pc = new WXBizDataCrypt(appid, this.session_key);
					// 					// 		let data = pc.decryptData(res.encryptedData, res.iv);
					// 					// 		console.log('解密后：', data)
					// 					// 	},
					// 					// 	fail: err => {
					// 					// 		console.log('获取用户信息错误：', err)
					// 					// 	}
					// 					// })
					
					// 				},
					// 				fail: err => {
					// 					console.log('请求失败：', err)
					// 				}
					// 			});
							},
							fail: err => {
								console.log('登录失败：', err)
							}
						})
				} 
			},
			getCode() {
				var _this = this;
				uni.request({
					url: config.baseUrl + '/Imagexcx.img?data=' + new Date(), //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',

					},
					method: 'GET', //请求方式  或GET，必须为大写
					success: res => {
						console.log(res)
						if (res.data.code == "0") {
							let str = res.data.data.valicode.replace(/\. +/g, '')
							str = str.replace(/[\r\n]/g, '')
							_this.src = ' data:image/jpeg;base64,' + str;
							_this.sessionId = res.data.data.JESSIONID
						} else {
							_this.$toast('验证码获取失败');

						}
					},
					fail: err => {
						console.log(err)
						uni.showToast({
							icon: 'none',
							title: '请求出错: ' + err,
							duration: 2000
						});
					}
				})
			},
			// // 初始化验证码
			// init: function() {
			// 	var context = wx.createCanvasContext('imgCanvas',this),
			//     w = this.width,
			//     h = this.height;
			// 	context.setFillStyle("#F5F6FD");
			// 	context.setLineWidth(5);
			// 	context.fillRect(0, 0, w, h);
			// 	this.verCode='';
			// 	var pool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "I", "M", "N", "O", "P", "Q", "R", "S",
			// 			"T", "U", "V", "W", "S", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
			// 		];

			// 	for (var i = 0; i < 4; i++) {
			// 		var c = pool[this.rn(0, pool.length - 1)];
			// 		var deg = this.rn(-30, 30);
			// 		context.setFontSize(18);
			// 		context.setTextBaseline("top");
			// 		context.setFillStyle(this.rc(80, 150));
			// 		context.save();
			// 		context.translate(20 * i + 10, parseInt(h / 1.5));
			// 		context.rotate(0);
			// 		context.fillText(c, 0, -15);
			// 		context.restore();
			// 		this.verCode += c;
			// 	}
			// 	// uni.setStorage({
			// 	// 	key: 'imgcode',
			// 	// 	data: str,
			// 	// });
			// 	for (var i = 0; i < 40; i++) {
			// 		context.beginPath();
			// 		context.arc(this.rn(0, w), this.rn(0, h), 1, 0, 2 * Math.PI);
			// 		context.closePath();
			// 		context.setFillStyle(this.rc(150, 200));
			// 		context.fill();
			// 	}
			// 	context.draw(); 
			// },
			// rc: function(min, max) {
			// 	var r = this.rn(min, max);
			// 	var g = this.rn(min, max);
			// 	var b = this.rn(min, max);
			// 	return "rgb(" + r + "," + g + "," + b + ")";
			// },
			// rn: function(max, min) {
			// 	return parseInt(Math.random() * (max - min)) + min;
			// },
			// refresh: function() {
			// 	this.init();
			// },
			// canvasIdErrorCallback: function(e) {
			// 	console.error(e.detail.errMsg)
			// },
			login() {
				if (this.checked) {
					storage.set("userName", this.loginName);
					storage.set("passWord", this.password);
				} else {
					storage.remove("userName");
					storage.remove("passWord");
				}
				/*this.$api.publicKey().then(res => {
					//res为获取到的公钥数据
					let pubexponent = res.pubexponent;
					let pubmodules = res.pubmodules;
					
					let jse = new JsEncrypt()
					// 设置 加密公钥
					jse.setPublicKey(pubmodules);
					// 进行加密
					let encrypted1 = jse.encrypt(this.loginName);
				}).catch(err => {})*/


				if (this.loginName == '') {
					uni.showToast({
						icon: 'none',
						title: '账号不能为空！',
						duration: 1500
					});
					return false
				}
				if (this.password == '') {
					uni.showToast({
						icon: 'none',
						title: '密码不能为空！',
						duration: 1500
					});
					return false
				};
				if (this.authcode == '') {
					uni.showToast({
						icon: 'none',
						title: '验证码不能为空！',
						duration: 1500
					});
					return false
				};
				// if (this.authcode.toLowerCase() !==this.verCode.toLowerCase()) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '验证码不正确！',
				// 		duration: 1500
				// 	});
				// 	this.init();
				// 	return false
				// };
				//this.$store.commit('login',{"userName":this.loginName,"token":'userid2'})
				let formObj = {
					loginName: this.loginName,
					passWord: this.password,
					authCode: this.authcode
				}
				// uni.showLoading({
				// 	title: '登录中...'
				// });
				var _this = this;
				uni.showLoading({
					title: '登录中...'
				});
				
				var openId=uni.getStorageSync('openId') || "";
				var nickName=uni.getStorageSync('nickName') || "";
				var avatarUrl=uni.getStorageSync('avatarUrl') || "";
				uni.request({
					url: config.baseUrl + '/loginJsonV2', //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Cookie': 'JSESSIONID=' + _this.sessionId || ''
					},
					data: {
						'userLoginCmd.loginName': formObj.loginName,
						'userLoginCmd.password': formObj.passWord,
						'userLoginCmd.checkCode': formObj.authCode,
						'openId':openId,
						'wxName':nickName,
						"txImg":avatarUrl
					},
					method: 'POST', //请求方式  或GET，必须为大写
					success: res => {
						console.log(res.data)
						uni.hideLoading();
						if (res.data[0].RETCODE == "1") {
							this.$store.commit('login', res.data[0].RETDESC);
							// uni.setStorageSync('userName')
							this.$store.commit('setUser', res.data[0].USERNAME);
							this.$store.commit('setPhone', res.data[0].PHONE);
							this.$store.commit('setUserId', res.data[0].USERID);
							uni.request({
								url: config.baseUrl + '/accessToken/loadDataReturnToken?&cmd.LOGINNAME='+formObj.loginName+'&cmd.USERID'+res.data[0].USERID, //仅为示例，并非真实接口地址。 
								header: {
									'Content-Type': 'application/x-www-form-urlencoded',
									 
								}, 
								method: 'GET', //请求方式  或GET，必须为大写
								success: res => {
									console.log(res.data.RPWD); 
									uni.hideLoading(); 
									uni.request({
										url: config.baseUrl + '/accessToken/token?cmd.grant_type=userPwd&cmd.account='+formObj.loginName+'&cmd.password='+res.data.RPWD, //仅为示例，并非真实接口地址。 
										header: {
											'Content-Type': 'application/x-www-form-urlencoded',
											 
										}, 
										method: 'GET', //请求方式  或GET，必须为大写
										success: res => {
											console.log(res.data); 
											uni.hideLoading(); 
											if(res.data[0].code=='0'){
												uni.setStorageSync('token',res.data[0].data.accessToken);
												uni.hideLoading(); 
												wx.redirectTo({
													url: '../index/index'
												})
											}; 
										},
										fail: err => {
											console.log(err)
											uni.showToast({
												icon: 'none',
												title: '请求出错: ' + err,
												duration: 2000
											});
										}
									})
								},
								fail: err => {
									console.log(err)
									uni.showToast({
										icon: 'none',
										title: '请求出错: ' + err,
										duration: 2000
									});
								}
							})
							// uni.setStorageSync('dyNums',res.data[0].TSCS); 
							
						};
						if (res.data[0].RETCODE == "99") {
							_this.$toast(res.data[0].RETDESC);
							_this.getCode()
						};
						if (res.data[0].RETCODE == "-1") {
							_this.$toast(res.data[0].RETDESC)
							_this.getCode()
						}
					},
					fail: err => {
						console.log(err)
						uni.showToast({
							icon: 'none',
							title: '请求出错: ' + err,
							duration: 2000
						});
					}
				})

			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			//获取验证码
			// getSessionid() {
			// 	// uni.showLoading({
			// 	// 	title: '加载中',
			// 	// 	mask: true
			// 	// });
			// 	this.codeSrc = config.baseUrl + '/authImg';
			// },
			//刷新验证码
			// refreshCode() {
			// 	this.codeSrc = config.baseUrl + '/authImg?now=' + new Date();
			// },
			oncheckbox(item) {
				this.checked = !this.checked;
			}

		}
	}
</script>

<style>
	.login {
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	#imgCanvas {
		width: 190rpx;
		height: 70rpx;
	}

	.top-img {
		text-align: center;
		margin: 80rpx auto;
	}

	.top-img>.img {
		display: inline-block;
		width: 200rpx;
		height: 200rpx;
	}
    .login_title{
		margin: 0rpx auto 20rpx;
		font-size: 40rpx;
		font-weight: bold;
		width: 75%; 
		color: #192321;
		letter-spacing: 2%;
	}
	.login_tips{
		margin:auto;
		font-size: 30rpx;
		line-height: 80rpx;
		width: 75%; 
		color: rgb(98, 159, 178);
		letter-spacing: 2%;
	}
	.app-title {
		font-family: PangMenZhengDao;
		font-weight: bold;
		font-size: 50rpx;
		color: #2151F4;
		text-align: center;
		padding-top: 10rpx;
		letter-spacing: 2px;
	}

	.login .main-item { 
		display: flex;
		align-items: center;
		width: 75%;
		padding-bottom: 20rpx;
		border-bottom: 1px solid rgba(25, 87, 115,.3);
		height:80rpx;
		margin: auto; 
		box-sizing: border-box;
	}

	.login .main-item.code {
		position: relative;
	}

	.main-item .icon {
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
	}

	.login .main-item input {
		font-size: 32rpx;
		color: #192321; 
		flex: 1;
		box-sizing: border-box;
	}

	.main-item .name_icon {
		background: url(../../static/img/icons-user.png)no-repeat center/ contain;
	}

	.main-item .password_icon {
		background: url(../../static/img/icons-password.png)no-repeat center/ contain;
	}

	.main-item .code_icon {
		width: 40rpx;
		height: 52rpx;
		background: url(../../static/img/icons-code.png)no-repeat left center/ contain;
	}

	.verification-code {
		display: flex;
		width: 100%;
		align-items: center;
	}

	.verification-code input {
		width: calc(100% - 160rpx);
	}

	.verification-code .img {
		position: absolute;
		right: 0;
		top: 0;
		width: 200rpx;
		height: 100rpx;
		border: 0;
		border-radius: 0 200rpx 200rpx 0;
	}

	.login .button-box {
		margin-top: 46rpx;
	}

	.login .button-box .login-btn {
		width: 75%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 4rpx;
		background: #46A496;
		font-size: 32rpx;
		color: #ffffff;
	}

	.checked-box {
		width: 80%;
		margin: 0 auto;
		padding-left: 50rpx;
	}

	.login .keep-password {
		color: #A9B7B5;
		font-size: 28rpx;
		padding-top: 26rpx;

	}

	/*checkbox 选项框大小  */
	checkbox .wx-checkbox-input {
		width: 35rpx;
		height: 35rpx;
	}

	/*checkbox选中后样式  */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #fff;
	}

	/*checkbox选中后图标样式  */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
		width: 28rpx;
		height: 28rpx;
		line-height: 28rpx;
		text-align: center;
		font-size: 22rpx;
		color: #345BC4;
		background: transparent;
		transform: translate(-50%, -50%) scale(1);
		-webkit-transform: translate(-50%, -50%) scale(1);
	}
</style>
