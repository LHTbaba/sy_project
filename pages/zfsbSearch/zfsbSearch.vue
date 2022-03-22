<template>
	<view class="login">
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>
		<!-- <view class="top-img">
			<image class="img" src="../../static/img/zfcbggxx.png" style="width: 320rpx;height:300rpx; "></image>
			<view class="app-title" style="color: #313333;">走访上报</view>
			<view style="margin-bottom: 30rpx;font-size: 30rpx;color: #808080;margin-top: 10rpx;">输入农户证件号进行上报</view>
		</view> -->
		<view class="main">
			<view class="main-item">
				<view class="icon name_icon"></view>
				<input type="text" placeholder="请输入身份证号码" v-model="cardId" placeholder-class="placeholder" />
			</view> 
			<view class="main-item code" style="overflow: hidden;">
				<view class="verification-code">
					<view class="icon code_icon"></view>
					<input type="text" placeholder="请输入验证码" v-model="authcode" placeholder-class="placeholder" />
					<image id="imgCanvas" :src="src" @click="getCode()"></image>
				</view>
			</view>
		</view>
		<!-- 滑动验证码 -->
		<!-- <tfgg-verify></tfgg-verify> -->
		<view class="button-box">
			<button type="default" style="background: #00B65A;" class="login-btn" @click="search()">查询</button>
		</view> 
		<view class="button-box">
			<button type="default" style="background: #1D92F1;" class="login-btn" @click="gohistory()">历史记录</button>
		</view> 
		<view class="mask" v-if="byBool">
			
		</view>
		<view class="sfts_box" v-if="byBool">
			<!-- <view class="sf_logo" style="padding: 40rpx 40rpx 0px 40rpx;">
				<image src="../../static/img/zfsbsfyz.png" style="width: 250rpx;height: 300rpx;" mode=""></image>
				<text class="sfspan">身份提示</text>
			</view> -->
			<view class="text_sm" style="padding: 0px 40rpx;">
				已验证该身份证信息属于边缘不稳定户无需上报
			</view>
			<text class="sf_btn">我知道了</text>
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
				title: '走访上报',
				checked: true,
				cardId:"",
				authcode:"",
				byBool:false, 
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
			this.getCode();  
		},
		methods: {
			back() {
				uni.navigateBack({
					delta:1
				})
			},
			search(){
				// if(this.cardId===""){
				// 	this.$toast('身份证号码不能为空');
				// 	return false
				// };
				// if(this.checkId()){
					
				// }else{
				// 	this.$toast('身份证格式错误');
				// 	return false
				// };
				// if(this.authcode===''){
				// 	this.$toast('验证码不能为空');
				// 	return false
				// }
				uni.navigateTo({
					url:'../zfsbReport/zfsbReport'
				})
			},
			checkId(){
				let reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx]$/;
				let cjreg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx][1-7][1-4]$/;
				return reg.test(this.cardId)||cjreg.test(this.cardId); 
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
									method:'post', 
									success(res) {   
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
							// uni.setStorageSync('dyNums',res.data[0].TSCS); 
							wx.redirectTo({
								url: '../index/index'
							})
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

<style scoped lang="scss">
	.mask{
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		z-index: 9;
		background: rgba(0,0,0,.5);
	}
	.sfts_box{
		position: fixed;
		width: 85%;
		height: 634rpx;
		background: #fff;
		border-radius: 12rpx;
		box-sizing: border-box;
		/*padding: .4rem;*/
		top: 0;
		bottom:0;
		right: 0;
		z-index: 99;
		left: 0;
		margin: auto;
	    .sf_logo{ 
	    	display: flex;
	    	flex-direction: column;
	    	justify-content: center;
	    	align-items: center;
	    	font-size: 30rpx;
			.sfspan{
				font-size: 36rpx;
				font-weight: bold;
				color: #000;
				opacity: .9;
			}
	    }
		.text_sm{
			margin-top: 30rpx; 
			text-align: center;
			font-size: 30rpx;
			color: #000;
			opacity: .5; 
			line-height: 50rpx;
			margin-bottom: 30rpx;
		}
		.sf_btn{
			width: 100%;
			height: 100rpx;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #00B65A;
			border-top: 1px solid rgba(0,0,0,0.1);
		}
		 
	}
	.login {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: #FAFAFA;
	}

	#imgCanvas {
		width: 190rpx;
		height: 70rpx;
	}

	.top-img {
		text-align: center;
		margin: 3vh auto 3vh;
	}

	.top-img>.img {
		display: inline-block;
		width: 180rpx;
		height: 180rpx;
	}

	.app-title {
		font-family: PangMenZhengDao;
		font-weight: bold;
		font-size: 42rpx;
		color: #313333;
		text-align: center;
		padding-top: 10rpx;
		letter-spacing: 2px;
	}

	.login .main-item {

		display: flex;
		align-items: center;
		width: 90%;
		height: 100rpx;
		margin: 30rpx auto 0;
		padding: 0 30rpx; 
		background: #fff;
		box-sizing: border-box;
	}

	.login .main-item.code {
		position: relative;
	}

	.main-item .icon {
		display: inline-block;
		width: 48rpx;
		height: 48rpx;
	}

	.login .main-item input {
		font-size: 32rpx;
		color: #000;
		padding: 0 20rpx;
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
		width: 50rpx;
		height: 52rpx;
		background: url(../../static/img/icons-code.png)no-repeat left center/ contain;
	}

	.verification-code {
		display: flex;
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
		margin-top: 30rpx;
	}

	.login .button-box .login-btn {
		width: 90%;
		height: 100rpx;
		line-height: 100rpx; 
		background: linear-gradient(143.65deg, #446BCF 0%, #2A52BE 100%);
		font-size: 32rpx;
		color: #fff;
	}

	.checked-box {
		width: 80%;
		margin: 0 auto;
		padding-left: 50rpx;
	}

	.login .keep-password {
		color: #9E9FA4;
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
