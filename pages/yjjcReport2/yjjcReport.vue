<template>
	<view class="" style="background: #FAFAFA;width: 100vw;height: 100vh;" id="wrap">
		<uni-header :title="title" id='header'>
			<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 48rpx;" @click="back"></icon>
		</uni-header>
		<scroll-view :style="{height:scrollerHeight}" show-scrollbar='false' scroll-y="true" class="main" ref='main'>
			<view class="gs_title">
				<view class="gs_status">
					待核查
				</view>
				<text style="color:#fff;opacity: .8; font-size: 25rpx;">当前状态</text>
			</view>
			<view class="gs_list">
				<view class="gs_item">
					<text class="gs_left">年度:</text>
					<text class="gs_right">2021年</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">行政区划:</text>
					<text class="gs_right">鹰潭市-贵溪市-白田乡-白田村</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">姓名:</text>
					<view class="gs_right">
						似懂非懂
					</view>
				</view> 
				<view class="gs_item">
					<text class="gs_left">证件号码:</text>
					<text class="gs_right">360112******4691</text>
				</view> 
				<view class="gs_item">
					<text class="gs_left">家庭人口数(人):</text>
					<view class="gs_right">
						2
					</view>
				</view>  
				<view class="gs_item">
					<text class="gs_left">联系电话:</text>
					<view class="gs_right">
						12233333
					</view>
				</view> 
				<view class="gs_item">
					<text class="gs_left">近一年家庭年均收入(元):</text>
					<view class="gs_right">
						<input type="text" class="ipt" value="" placeholder="请输入" />
					</view>
				</view> 
				<view class="gs_item" style="display: block;height: auto;">
					<view class="gs_left" style="height: 80rpx;display: flex;align-items: center;">预警原因:</view>
					<view class="ipt_choose">
						<view class="ipt_checked">
							自付医疗费用高
						</view>
						<view class="ipt_checked">
							重大疾病
						</view>
						<view class="ipt_checked">
							重大灾害
						</view>
					</view>
				</view>  
			</view>		
			<!-- <view class="gs_list" style="margin-top: 20rpx;"> 
				<view class="gs_item">
					<text class="gs_left">是否同意授权:</text>
					<text class="gs_right">是</text>
				</view> 
				<view class="gs_item" style="height: auto;display: block;padding-bottom: 20rpx;">
					<view class="gs_left" style="width: 100%;height: 60rpx;line-height: 60rpx;">佐证材料:</view>
					<view class="zc_list">
						<view class="zc_item">
							<image src="../../static/img/dengru_03.png" data-src='../../static/img/dengru_03.png' mode=""></image>
						</view>
						<view class="zc_item">
							<image src="../../static/img/dengru_03.png" data-src='../../static/img/dengru_03.png' mode=""></image>
						</view>
						<view class="zc_item">
							<image src="../../static/img/dengru_03.png" data-src='../../static/img/dengru_03.png' mode=""></image>
						</view>
					</view>
				</view> 
			</view>		 -->
			<view class="gs_list" style="margin-top: 20rpx;">  
				<view class="gs_item">
					<text class="gs_left">预警等级:</text>
					<view class="gs_right">
						<text style="color: red;">红色预警</text>
						<text class="red_icon"></text>
					</view>
				</view> 
				<view class="gs_item">
					<text class="gs_left">预警时间:</text>
					<view class="gs_right">
					   2021-06-23
					</view>
				</view> 
			</view>
			<view class="tph_title">
				<text style="">预警情况：</text>
			</view>
			<view class="tph_list">
				<view class="tph_item">
					<view class="tph_left">
							教育部门-重大教育支出
					</view>
					<view class="tips_box">
						<text class="tips_icon"></text>
						<view class="tips_text">
							张三:张三:教育费用自费超过0.5万元（含）
						</view>
					</view>
				</view>
				<view class="tph_item">
					<view class="tph_left">
							教育部门-重大教育支出
					</view>
					<view class="tips_box">
						<text class="tips_icon"></text>
						<view class="tips_text">
							张三:张三:教育费用自费超过0.5万元（含）
						</view>
					</view>
				</view>
			</view> 
			<view class="uploads_box">
				<view class="upload_h3">
					反馈核查情况<text style="color: red; margin: 0px 10rpx;">*</text>
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
			 
		</scroll-view>
	</view>


</template>

<script>
	import config from "../../config.js";
	export default {
		data() {
			return {
				title: '预警详情',
				reNum: 0,
				isMore: false,
				noMore: false,
				pageNum: 1,
				typeIndex:'',
				zghList:[],
				typeArray:[],
				pageSize: 15,
				src:"",
				addbool:false,
				refresherTriggered: false,
				_refresherTriggered: false,
				retext: '待核查',
				barList: ['待核查', '已核查'],
				tabIndex: 0,

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

		.gs_status {
			margin: 0px;
			padding-top: 10rpx;
			font-size: 32rpx;
			color: #fff;
		}
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
	.gs_list{
		background: #fff;
		.gs_item{
			height: 96rpx;
			display: flex;
			padding: 0px 30rpx;
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
