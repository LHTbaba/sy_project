<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
			<view class="report_list" style="padding-top: 0px;">
				<view class="report_item">
					<view class="report_h3">
						01.申请年度<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="text" v-model="year" value="" disabled="disabled"  class="report_ipt"  />
				</view>
				<view class="report_item">
					<view class="report_h3">
						02.所属行政区划<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="text" v-model="area" value="" disabled="disabled"  class="report_ipt"  />
				</view>
				<view class="report_item">
					<view class="report_h3">
						03.姓名<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="text" v-model="name" value=""  placeholder="请输入姓名"   class="report_ipt"  />
				</view>
				<view class="report_item">
					<view class="report_h3">
						04.证件号码<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="text"   v-model="cardId" value=""  placeholder="请输入证件号码" disabled="disabled"   class="report_ipt"  />
				</view>
				<view class="report_item">
					<view class="report_h3">
						05.家庭人口数<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="number" v-model="teamNum" value=""  placeholder="请输入家庭人口数"   class="report_ipt"  />
				</view>
				<view class="report_item">
					<view class="report_h3">
						06.联系电话<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="text" v-model="phone" value=""  placeholder="请输入联系电话"   class="report_ipt"  />
				</view>
				<view class="report_item">
					<view class="report_h3">
						07.近一年家庭年均可支配收入(元)<text style="color: red;margin: 0px 5px;">*</text>
					</view>
					<input type="text" v-model="money" value=""  placeholder="请输入近一年家庭年均可支配收入"   class="report_ipt"  />
				</view>
				<view class="report_item" style="padding: 0px;padding-top: 20rpx;">
					<view class="report_h3" >
						08.申请帮扶原因(最多选择两个)<text style="color: red;margin: 0px 5px;">*</text>
					</view> 
				</view> 
				<view class="gs_item"   style="display: block;height: auto;">
					<view class="ipt_choose">
						<view class="ipt_checked">
							<text class="checked_span"></text>因学
						</view>
						<view class="ipt_checked">
							<text class="checked_span"></text>因病
						</view>
					</view>
				</view> 
			</view> 
			 <view class="uploads_box">
			 	<view class="upload_h3">
			 		上传核实材料<text style="color: red; margin: 0px 10rpx;">*</text>
			 	</view>
			 	<view id="fileText">
			 		<textarea name="" id="fileTextArea" placeholder="请写下反馈核查情况"  maxlength="500"></textarea>
			 		<view style="color:#dfdfdf;text-align: right;padding-right: 20rpx;font-size:28rpx">
			 			<text class="numsText">0</text>/<text class="numsText">500</text>
			 		</view>
			 	</view>
			 	<view class="upload_box" style="margin-bottom: 20rpx;">
			 		<view class="upload_item"  v-for="(item,index) in zghList" :key='index'> 
			 			<block>
			 				<image :src="item.url" @click="ViewImage" mode="" class="uploadImg" :data-src="item.url"  :data-index="index"></image>
			 				<view class="delBtn" style="color: red;font-size: 50rpx"   @click="delImg" :data-index="index"><text style="color: #fff;font-size: 28rpx;position: absolute;bottom: 0;left: 12rpx;">x</text></view>
			 			</block> 
			 		</view>
			 		<view class="upload_btn" @click="chooseImage" v-if="zghList.length<9" >
			 			<text class="iconfont iconjiahao" style="font-size: 60rpx;color: #007AFF;"></text>
			 		</view>
			 	</view>
			 	
			 </view>
			<view class="report_list" style="margin-bottom: 20rpx;padding: 20rpx 40rpx;background: #fff;margin-top: 20rpx;">
				<view class="add_farm" @click="addFamily()">
					添加家庭成员
				</view>
				<view class="family_list">
					<view class="family_item">
						<view class="family_left">
							<view class="">
								<text  class="strong_title">一般农户1</text>
								<text class="condition_span">户主</text>
							</view>
							<view class="id_text">
								身份证&nbsp;360112******4691 
							</view>
						</view>
						<view class="delFamily">
							
						</view>
					</view>
					<view class="family_item">
						<view class="family_left">
							<view class="">
								<text class="strong_title">一般农户1</text>
								<text class="condition_span">户主</text>
							</view>
							<view class="id_text">
								身份证&nbsp;360112******4691 
							</view>
						</view>
						<view class="delFamily">
							
						</view>
					</view>
				</view>
			</view>
			
			<!-- <view class="report_list" style="margin-bottom: 20rpx;padding: 20rpx 40rpx;background: #fff;margin-top: 20rpx;">
				<view class="add_farm" @click="addFamily()">
					添加家庭成员
				</view>
				<view class="family_list">
					<view class="family_item">
						<view class="family_left">
							<view class="">
								<text  class="strong_title">一般农户1</text>
								<text class="condition_span">户主</text>
							</view>
							<view class="id_text">
								身份证&nbsp;360112******4691 
							</view>
						</view>
						<view class="delFamily">
							
						</view>
					</view>
					<view class="family_item">
						<view class="family_left">
							<view class="">
								<text class="strong_title">一般农户1</text>
								<text class="condition_span">户主</text>
							</view>
							<view class="id_text">
								身份证&nbsp;360112******4691 
							</view>
						</view>
						<view class="delFamily">
							
						</view>
					</view>
				</view>
			</view> -->
			<view class="bz_box">
				<view class="bz_text">
					<view class="bz_h3" style="text-align: center;">
						个人委托授权及法律责任声明
					</view>
					<view class="my_box" @click="maskShow1()">
						 <image :src="canvasURL1" mode=""   v-if="canvasBool1" ></image>
						 <view class="qm_mark" v-else >
							签名区域
						 </view>
					</view>
				</view>
			</view>
			<view class="bz_box">
				<view class="bz_text">
					<view class="bz_h3">
						核实人签名: <text style="color: red;">*</text>
					</view>
					<view class="my_box" @click="maskShow()">
						 <image :src="canvasURL" mode=""   v-if="canvasBool" ></image>
						 <view class="qm_mark" v-else >
							签名区域
						 </view>
					</view>
				</view>
			</view>
			<view class="report_list" style="margin-bottom: 20rpx;">
				<view style="padding: 20rpx 0px;">
					<view class="bz_h3">
						核实人姓名:  <text style="color: red;">*</text>
					</view>
					<input type="text" name="name" id="zpyyTextArea" value="" autocomplete="off" placeholder="请输入核实人姓名">
				</view>
			</view>
			<view class="report_box" >
				<view class="" style="border-bottom: 1px solid #e0e6e4;">
					<view class="bz_h3">
						 <text style="color: red;">*</text>图形验证码: 
					</view>
					<view class="ipt_box">
						<input type="text" value="" placeholder="请输入图形验证码" />
						<image :src="src"  style="width: 180rpx;height: 72rpx;" mode=""></image>
					</view>
				</view>
				
			</view>
			<view class="report_sub">
				<view class="reportBtn">提交</view>
			</view>
			<view class="nh_mask" v-if="addbool">
			 
			</view>
			<view class="add_box" v-if="addbool">
				<view class="del_team" @click="closeFamily()"></view>
				<view class="add_h3">
					添加成员
				</view>
				<view class="team_list">
					<view class="team_item">
						<view class="team_label">
							与户主关系
						</view>
						<view class="" style="flex:1;display: flex;height: 100%;align-items: center;justify-content: flex-end;">
							<picker @change="typeChange" :value="typeIndex" :range="typeArray">
								<view class="picker" v-if="typeIndex != ''">{{typeArray[typeIndex]}}</view>
								<view v-else class="picker" style="color:#7d7979">请选择</view>
							</picker>
							<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 36rpx;transform: rotate(-90deg);color: #999;"></icon>
						</view>
						<!-- <picker mode="" :range="" @change="" class="picker">
							<view>{{}}</view>
						</picker> -->
					</view>
					<view class="team_item">
						<view class="team_label">
							成员姓名
						</view>
						 <input type="text" value="" class="team_ipt" />
					</view>
					<view class="team_item">
						<view class="team_label">
							身份证号
						</view>
						 <input type="text" value="" class="team_ipt" />
					</view>
					<view class="completeBtn" @click="completeFamily()">
						完成
					</view>
				</view>
			</view>
			<view class="nh_mask" v-if="addbool">
			 
			</view>
			<view class="add_box" v-if="addbool">
				<view class="del_team" @click="closeFamily()"></view>
				<view class="add_h3">
					添加成员
				</view>
				<view class="team_list">
					<view class="team_item">
						<view class="team_label">
							与户主关系
						</view>
						<view class="" style="flex:1;display: flex;height: 100%;align-items: center;justify-content: flex-end;">
							<picker @change="typeChange" :value="typeIndex" :range="typeArray">
								<view class="picker" v-if="typeIndex != ''">{{typeArray[typeIndex]}}</view>
								<view v-else class="picker" style="color:#7d7979">请选择</view>
							</picker>
							<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 36rpx;transform: rotate(-90deg);color: #999;"></icon>
						</view>
						<!-- <picker mode="" :range="" @change="" class="picker">
							<view>{{}}</view>
						</picker> -->
					</view>
					<view class="team_item">
						<view class="team_label">
							成员姓名
						</view>
						 <input type="text" value="" class="team_ipt" />
					</view>
					<view class="team_item">
						<view class="team_label">
							身份证号
						</view>
						 <input type="text" value="" class="team_ipt" />
					</view>
					<view class="completeBtn" @click="completeFamily()">
						完成
					</view>
				</view>
			</view>
		</scroll-view>
	</view>


</template>

<script>
	import config from "../../config.js";
	export default {
		data() {
			return {
				title: '走访上报',
				year:"2021",
				area:"江西省-丰城市",
				addbool:false,
				name:"消除",
				typeIndex:'',
				cardId:"36320233109933",
				teamNum:'2',
				phone:'15807913622',
				money:"2222",
				zghList:[],
				typeArray:['中国', '美国', '巴西', '日本'], 
				scrollerHeight: '', //路径点集合 
			}
		},
		onLoad() {

		},
		onShow() {
			uni.$emit('canvasURL',function(value){
				
			})
		},
		mounted() {
			this.barheight = this.$store.state.barHeight;
			console.log(this.barheight);
			var _this = this;
			console.log(this.openId);
			_this.getHeight();
			_this.getCode();
		},
		methods: {
			editIpt(){
				this.hsbool=true;
			},
			typeChange(e){
				this.typeIndex = e.target.value;
			},
			addFamily(){
				this.addbool=true;
			},
			closeFamily(){
				this.addbool=false;
			},
			subForm(){
				
			},
			checkPhone(){
				//座机正则
				var landlinePtn = /^(0\d{2,3}-?)?\d{7,8}$/;
				let reg = /^1[345789]\d{9}$/;
				return reg.test(this.phone)||landlinePtn.test(this.phone);
			},
			checkForm(){
				if(this.name===""){
					return this.$toast('请输入姓名');
				};
				if(this.teamNum===""){
					return this.$toast('请输入家庭人口数');
				};
				if(this.phone===""){
					return this.$toast('请输入电话号码');
				};
				if(this.money===""){
					return this.$toast('请输入近一年家庭年均可支配收入');
				}; 
			},
			checkId(){
				let reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx]$/;
				let cjreg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx][1-7][1-4]$/;
				return reg.test(this.cardId)||cjreg.test(this.cardId); 
			},
			//上传图片
			chooseImage() {
				var _this = this;
				wx.chooseImage({
					count: 9, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera', 'album'], //从相册选择
					success: (res) => {
						console.log(res)
						var tempFilePaths = res.tempFilePaths
						console.log(config.baseUrl)
						let sessionId = uni.getStorageSync("sessionId");
						tempFilePaths.forEach(item => {
							wx.uploadFile({
								url: config.baseUrl + '/Upload_wk',
								header: {
									"Content-Type": "multipart/form-data",
									"accept": 'application/json',
									'Cookie': 'JSESSIONID=' + sessionId
								},
								filePath: item, // uni.chooseImage函数调用后获取的本地文件路劲
								name: 'file',
								success: (res) => {
									console.log(res);
									if (res.statusCode == '200') {
										var data = JSON.parse(res.data)
										var obj = {
											name: data.data.name,
											type: data.data.suffix,
											url: config.baseUrl + '/' + data.data.path,
										};
										_this.imgList.push(obj);
										console.log(_this.imgList)
									} else {
										_this.$toast(res.msg)
									}
								},
								fail: (err) => {
									_this.$toast(err)
								}
							});
			
						})
			
					}
				});
			},
			ViewImage(e) {
				var _this = this;
				var imgLists = _this.imgList.map(item => {
					return item.url
				})
				// _this.imgList.forEach(item=>{
				// 	if(item.type=='png'||item.type=='jpg'||item.type=='jpeg'||item.type=='gif'||item.type=='bmp'){
				// 		imgLists.push(item.url)
				// 	}
				// })
				uni.previewImage({
					urls: imgLists,
					current: e.currentTarget.dataset.index
				});
				// uni.previewImage({
				// 	urls: _this.imgList,
				// 	current:e.currentTarget.dataset.src
				// });
			},
			delImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定删除该照片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			addFamily(){
				this.addbool=true;
			},
			closeFamily(){
				this.addbool=false;
			},
			maskShow1(){
				uni.navigateTo({
					url:'../qianming1/qianming1'
				})
			},
			maskShow(){
				uni.navigateTo({
					url:'../qianming/qianming'
				})
			},
			getHeight() {
				var _this = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#wrap').boundingClientRect(data => {
					_this.scrollerHeight = data.height;
				}).exec();
				_this.$nextTick(function() {
					query.select('#header').boundingClientRect(data => {
						_this.scrollerHeight = (_this.scrollerHeight - data.height) + 'px';
					}).exec();
				});
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
							// _this.sessionId = res.data.data.JESSIONID
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
			
			seeDetail(){ 
				uni.navigateTo({
					url:'../webview/webview?url=https://gxhsbf.zjwq.net/loadPkhxxDataCA?url=/WEB-INF/jsp/gxfpWX/poor_home.jsp&cmd.sqlKey=HU_ZAA.POOR_INFO&cmd.sqlType=proc&cmd.QYEAR=2021&cmd.POOR_ID=3ABA0E18AC956DC4E05350021B0AB9F8'
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.gs_title {
		padding: 30rpx 30rpx;
		height: 100rpx;
		background: #1597F6;
        display: flex;
		align-items: center;
		justify-content: space-between;
		.gs_status {
			margin: 0px;
			padding-top: 10rpx;
			font-size: 32rpx;
			color: #fff;
		}
	}
	.ipt_choose{
		width: 100%;
		box-sizing: border-box;
		.ipt_checked{
			margin-top: 10px;
			height: 45px;
			box-sizing: border-box;
			background: #fff;
			padding-left: 10px;
			display: flex;
			border-radius: 3px;
			align-items: center;
			font-size: 14px;
			color: #282828;
			border: 1px solid #efefef;
			.checked_span {
			    width: 36rpx;
			    height: 36rpx;
			    margin-right: 10rpx;
				display: inline-block; 
	            background: url(../../static/img/icons-unchecked2.png) center no-repeat;
				background-size: 100% 100%;
			}
			.checked_active .checked_span {
			    background: url(../../static/img/icons-checked2.png) center no-repeat;
			    background-size: 100% 100%;
			}
		}
	}
	.editBtn{
		padding: 6rpx 24rpx;
		background: rgba(155, 96, 96, .4);
		color: rgba(255,255,255,.8);
		border: 1px solid #fff;
		font-size: 28rpx;
		border-radius: 3px;
	}
	.bz_h3{
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}
	.report_sub{
		padding: 20rpx 40rpx;
		background: #fff;
		.reportBtn{
			height: 90rpx;
			line-height:90rpx;
			font-size: 32rpx;
			background: #317FEC;
			color: #fff;
			text-align: center;	
		}
	}
	.report_box{
		padding: 20rpx 40rpx 0px 40rpx;
		background: #fff;
		.ipt_box{
			width: 100%;
			display: flex;
			align-items: center;
			input{
				height: 90rpx;
				font-size:28rpx; 
				flex: 1;
				border: none;
			}
		}
	}
	.report_list{
		padding: 20rpx 40rpx;
	    background: #fff; 
		.report_item{
			padding: 20rpx 0px;
			.report_h3{
				font-size: 30rpx;
			    margin-bottom: 20rpx;
				color: #424242;
			}
			.report_ipt{
				height: 84rpx;
				margin-left: 0px;
				font-size: 30rpx;
				width: 100%;
				padding-left: 10rpx;
				box-sizing: border-box;
				background: #ffffff;
				font-size: 30rpx;
				border: 1px solid #e0e5e6;
				border-radius: 3px;
			}
		}
		#zpyyTextArea{
			height: 90rpx;
			margin-left: 0px;
			font-size: 28rpx;
			width: 100%;
			padding-left: 10rpx;
			border: 1px solid #e0e5e6;
		    border-radius: 3px;
			box-sizing: border-box;
			background: #ffffff;
		}
	}
	.bz_box{
		padding: 20rpx 40rpx;
		margin-top: 20rpx;
		background: #fff;
		.bz_text{
			color: #424242;
		    font-size: 24rpx;
			.bz_h3{
				width: 100%;
				text-align: left;
				font-size: 28rpx;
				line-height: 60rpx;
			}
			.my_box{
				width: 100%;
				height: 300rpx;
				border-radius: 6rpx;
				background: rgba(255, 255, 255, 0.08);
				border: 1px solid rgba(68, 107, 207, 0.17);
				box-sizing: border-box; 
				overflow: hidden;
				margin: 20rpx 0px;
				position: relative;
				image{
					width: 100%;
					height: 100%;
				}
				.qm_mark{
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30rpx;
					color: #ccc;
					background: rgba(0,0,0,.01);
					cursor: pointer;
				}
			}
		}
	}
	.delFamily{
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		background: url(../../static/img/delForm.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.add_farm{
		width: 100%;
		height: 88rpx;
		opacity: 1;
		text-align: center;
		line-height: 88rpx;
		background: rgba(21,151,246,0.20);
		border: 1px solid #1597f6;
		border-radius: 5px;
		color: #1597F6; 
	}
	.uploads_box{
		padding: 20rpx 40rpx;
		margin-top: 20rpx;
		background: #fff;
		.upload_h3{
			font-size: 30rpx;
		    margin-bottom: 10rpx;
			color: #424242;
		}
		#fileText{
			width: 100%;
			box-sizing: border-box;
			border: 1px solid #e0e5e6;
			border-radius: 3px;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			textarea{
				border: none;
				font-size: 28rpx;
				margin: 0px;
				height: 200rpx;
				padding:20rpx;
			}
		}
	}
	.ipt_choose{
		width: 100%;
		box-sizing: border-box;
		.ipt_checked{
			margin-bottom: 20rpx;
			height: 90rpx;
			box-sizing: border-box;
			background: #fff;
			padding-left: 20rpx;
			display: flex;
			border-radius: 3px;
			align-items: center;
			font-size: 30rpx;
			color: #282828;
			border: 1px solid #efefef; 
		}
	}
	.upload_box{
		// padding: 0px 20rpx;
		overflow: hidden;
		.upload_item{
			width: 120rpx;
			height: 120rpx;
			float: left;
			margin-right: 20rpx;
			margin-top: 20rpx;
			position: relative;
				overflow: hidden;
			.uploadImg{
				width: 100%;
				height: 100%;
				
			}
			.delBtn{
				position: absolute;
				top: -8rpx;
				right: -8rpx;
				width: 40rpx;
				height: 40rpx;
				border-bottom-left-radius: 50%;
				background: rgba(0,0,0,.3);
			
			}
		}
		
		
		.upload_btn{
			width: 120rpx;
			height: 120rpx;
			box-sizing: border-box;
			// border: 1px solid #CCCCCC;
			display: flex;
			float: left;
			background: #f7f7f7;
			margin-right: 20rpx;
			margin-top: 20rpx;
			justify-content: center;
			align-items: center;
		}
	}
	.gs_item{
		height: 96rpx;
		display: flex;
		// padding: 0px 30rpx;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #e0e5e6;
		&:last-child{
			border-bottom:none
		}
		.gs_left{
			color: #797979;
		}
		.gs_right{
			color: #424242;
		}
		.zc_list{
			width: 100%;
		    overflow: hidden;
			.zc_item{
				width: 80rpx;
				height: 80rpx;
				padding: 0px;
				margin-right: 5px;
				margin-bottom: 5px;
				float: left;
				border-bottom: none;
				
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.gs_list{
		background: #fff;
		
	}
	.tph_title{
		padding: 0px 30rpx;
		background: #1597F6;
		font-size: 30rpx;
		height: 96rpx;
		display: flex;
		color: #fff;
		justify-content: space-between;
		align-items: center;
		.see_btn{
			display: inline-block;
			padding: 6rpx 24rpx;  
			background: #0687e6;
			border: 1px solid rgba(255,255,255,0.60);
			border-radius: 5px;
			color: rgba(255,255,255,.82);
		}
	}
	.ipt{
		width: 280rpx;
		height: 70rpx;
		line-height: 70rpx;
		padding-right: 10rpx;
		font-size: 30rpx;
		text-align: right;
		margin: 0px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}
	.tph_list{
		width: 100%;
		margin-bottom: 10px;
		.tph_item{
			padding: 0px 30rpx;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 30rpx;
			background: #fff;
			border-bottom: 1px solid #e0e5e6;
			&:last-child{
				border-bottom: none;
			}
			.tph_left {
			    color: #797979;
			}
			.tph_right {
			    color: #424242;
			}
			.tips_box {
			    position: relative;
			    margin-left: 5px;
				.tips_icon {
				    display: inline-block;
				    vertical-align: middle;
				    width: 40rpx;
				    height: 40rpx;
				    background: url(../../static/img/ts_icons.png) center center no-repeat;
				    background-size: 100% 100%;
				}
				.tips_text{
					position: absolute;
					width: 200rpx;
					display: none;
					word-break: break-word;
					padding: 10px;
					border-radius: 3px;
					color: #424242;
					text-align: center;
					font-size: 28rpx;
					left: -264rpx;
				    top: -20rpx;
					background: #ececec;
					/* box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 12%); */
					z-index: 100;
					&:before {
					    display: block;
					    content: "";
					    width: 15px;
					    height: 15px;
					    position: absolute;
					    transform: rotate(45deg);
					    background: #ececec;
					    right: -8px;
					    top: 13px;
					    /* box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 12%); */
					    z-index: 99;
					} 

				}
			}
			.tips_box:hover .tips_text{
				display: block;
			}
		}
	}
	.farm_detail{
		padding: 0px 30rpx;
		height: 96rpx;
		display: flex;
		align-items: center;
		background: #1597F6;
		color: #fff;
		font-size: 30rpx;
	}
	.nh_mask{
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.4);
	}
	.add_box{
		width: 80%;
		height: 600rpx;
		box-sizing: border-box;
		padding: 40rpx;
		position: fixed;
		background: #fff;
		z-index: 99;
		border-radius: 10rpx;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto; 
	}
	.completeBtn{
		display: flex;
		width: 100%;
		margin-top: 20rpx;
		height: 88rpx;
		font-size: 30rpx;
		color: #fff;
		border-radius: 10rpx;
		background: #1597F6;
		justify-content: center;
		align-items: center;
	}
	.del_team{
		display: inline-block;
		position: absolute;
		width: 36rpx;
		height: 36rpx;
		right: 20rpx;
		top: 20rpx;
		background: url(../../static/img/del_team.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.add_h3{
		text-align: center;
		font-size: 36rpx;
		color: #424242;
	}
	.team_list{
		width: 100%;
		.team_item{
			width: 100%;
			margin-top: 30rpx;
			display: flex;
			align-items: center;
			height: 100rpx;
			font-size: 30rpx;
			border-bottom: 1px solid #E0E5E6;
			.team_label{
				width: 200rpx;
				
			}
			.picker{
				flex: 1;
				display: flex;
				height: 100%;
				align-items: center;
			}
			.team_ipt{
				flex: 1;
				height: 100%;
				margin: 0px;
				font-size: 30rpx;
				border: none;	
			}
		}
	}
	.family_list{  
		background: #fff;
		.family_item{
			width: 100%;
			display: flex;
			padding: 16rpx 0px;
			align-items: center;
			justify-content: space-between;
			.family_left {
			    color: #BFBFBF;
			    font-size: 24rpx;
				.strong_title {
				    color: #424242;
				    font-size: 28rpx;
				    margin-right: 20rpx;
				}
				.condition_span{
					padding: 3px 5px;
					background: rgba(191,191,191,.1);
					color: #bfbfbf;
					border-radius: 3px;
				}
				.id_text{
					font-size: 24rpx;
				    margin-top: 5px;
					color: #8f8f94;
				}
			}
		}
	}
	.jd_list{
		margin-top: 20rpx;
		background: #fff;
		padding: 0px 30rpx;
		&:before {
		    display: block;
		    content: "";
		    width: 1px;
		    height: calc(100% - 40rpx);
		    position: absolute;
		    left: 38rpx;
		    bottom: 20rpx;
		    top: 20rpx;
		    border-left: 1px solid #eaedef;
		}
		.jd_item{
			position: relative;
			padding-bottom: 40rpx;
			padding-top: 30rpx;
			
			.jd_item_left {
			    position: absolute;
			    width: 20rpx;
			    display: flex;
			    justify-content: flex-start; 
			    left: 0;
				.right_icon {
				    z-index: 9; 
				    display: inline-block;
				    width: 16rpx;
				    height: 16rpx;
				    position: absolute;
				    right: 0px;
				    top: 30rpx;
				    border: 4rpx solid #fff;
				    margin-top: -20rpx;
				    background: #ccc;
				    border-radius: 100%;
				    background-size: 100%;
				}
			}
			.jd_item_right{
				padding-left: 50rpx;
				.h3_jd{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0px;
					font-size: 32rpx;
					margin-bottom: 20rpx;
					color: #929292;
					.time_tips{
						color: #BFBFBf;
						font-weight: 500;
						font-size: 30rpx;
					}
				}
				.dl_txt{
					color: #BFBFBF;
					line-height: 50rpx;
					font-size: 30rpx;	
					.strong_dl{
						color: #797979;
						font-weight: bold;
					}
				}
				.hc_list{ 
					width: 100%;
					overflow: hidden; 
					.hc_item{
						width: 100rpx;
						height: 100rpx;
						float: left;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
