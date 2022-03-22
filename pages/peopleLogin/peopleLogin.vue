<template>
	<view class="login" id="wrap">
		<uni-header1 :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header1>
		<scroll-view scroll-y="true" class="content" :style="{height:scrollerHeight}">
			 <view class="inner_content">
			 	<view class="id_box">
			 		<view class="id_title">上传身份证绑定</view> 
					<image class="id_img1" @click="tocamera()"  :src="src" mode="" v-if="src!=''"></image>
					<image class="id_img2" @click="tocamera()" v-else  src="../../static/img/id_card.png" mode=""></image>
			 	</view>
				<view class="id_item">
					<view class="item_label">
						您的姓名
					</view>
					<view class="ipt_box">
						<input type="text" v-model="name" value="" disabled="disabled"  placeholder="请输入" class="ipt_text" />
					</view>
				</view>
				<view class="id_item">
					<view class="item_label">
						身份证号
					</view>
					<view class="ipt_box">
						<input type="text" v-model="idCard" value="" disabled="disabled" placeholder="请输入" class="ipt_text" />
					</view>
				</view>
				<view class="sub_btn" @click="bdLogin()">
					绑定
				</view>
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
				name:"",
				idCard:"",
				width: ' ',
				height: ' ',
				src:"",
				title: '身份绑定',
				checked: true,
				src: "",
				scrollerHeight: '', //路径点集合 
				sessionId: ''
			}
		},
		onShow() {
			var _this=this;
			uni.$on('camera',function(obj){
				_this.src='data:image/jpeg;base64,'+obj.baseUrl;
				_this.name=obj.name;
				_this.idCard=obj.idCard;
			})
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
			this.getHeight(); 
			this.getUser();
			this.getOpenId();
		},
		methods: {
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
			tocamera(){
				uni.navigateTo({
					url:'../camera/camera'
				})
			},
			bdLogin(){
				if(this.src==''){
					this.$toast('请点击上传身份证进行识别');
					return false
				};
				var _this=this;
				var openId=uni.getStorageSync('openId') || "";
				var nickName=uni.getStorageSync('nickName') || "";
				var avatarUrl=uni.getStorageSync('avatarUrl') || "";
				uni.request({
					url: config.baseUrl + '/loginJsonV3', //仅为示例，并非真实接口地址。 
					header: {
						'Content-Type': 'application/x-www-form-urlencoded', 
					},
					data:{ 
						'userName': _this.name,
						'userCard': _this.idCard,
						'openId':openId,
						'wxName':nickName,
						"imgSrc":_this.src
					},
					method: 'POST', //请求方式  或GET，必须为大写
					success: res => {
						console.log(res);
						if(res.statusCode=='200'){
							_this.$toast('绑定成功');
							uni.setStorageSync('poorName',res.data[0].QUSERNAME);
							uni.setStorageSync('jcdx',res.data.OU_AAA001);
							uni.setStorageSync('puserType',res.data.OU_USERTYPE);
							uni.navigateTo({
								url:'../peopleIndex/peopleIndex'
							})
						}else{
							_this.$toast('')
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
				uni.reLaunch({
					url:'../people/people'
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.login {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background:#fff;
	}
    .inner_content{
		padding: 40rpx 30rpx;
		.id_box{
			width: 100%;
			.id_title{
				font-size: 32rpx;
				color: rgb(38, 51, 67);
				margin-bottom: 20rpx;
			}
			.id_img1{
				width: 100%;
				height: 400rpx;
			}
			.id_img2{
				width: 100%;
				height: 400rpx;
			}
		}
		.id_item{
			margin-top: 40rpx;
			width: 100%;
			.item_label{
				color: rgb(38, 51, 67);
				font-size: 30rpx;
				margin-bottom: 20rpx;
			}
			.ipt_box{
				width: 100%;
				height: 88rpx;
				box-sizing: border-box;
				padding-left: 20rpx; 
				border-radius: 16rpx;
			    border: 1px solid rgba(243, 244, 246, 1); 
			    background: rgba(250, 250, 250, 1);
				font-size: 30rpx;
				input{
					height: 100%;
					flex: 1;
				}
			}
		}
		.sub_btn{
			margin-top: 40rpx;
			height: 88rpx;
			width: 100%;
			border-radius: 8rpx;
		    background: rgba(87, 107, 222, 1);
			font-size: 32rpx;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	 
</style>
