<template>
	<view class="content" style="width: 100vw;height: 100vh;">
		<view class="wrap" id='wrap' style="position: relative;width: 100%">
			<uni-header :title="title" id='header'>
				<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 54rpx;" @click="back"></icon>
			</uni-header>
			<scroll-view class="scroll-panel" scroll-y="auto" :style="{height:scrollerHeight}">
				<view class="content-panel"> 
					<view class="search">
						<view class="search-list">
							<text>户类型</text>
							<view class="" style="display: flex;height: 100%;align-items: center;">
								<picker @change="typeChange" :value="typeIndex" :range="typeArray">
									<view class="picker" v-if="typeIndex != ''">{{typeArray[typeIndex]}}</view>
									<view v-else class="picker" style="color:#7d7979">请选择</view>
								</picker>
								<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 36rpx;transform: rotate(-90deg);color: #999;"></icon>
							</view>
						</view>
						<view class="search-list">
							<text>预警等级</text>
							<view class="" style="display: flex;height: 100%;align-items: center;">
								<picker @change="typehfc" :value="hfcIndex" :range="hfcArray">
									<view class="picker" v-if="hfcIndex != ''">{{hfcArray[hfcIndex]}}</view>
									<view v-else class="picker" style="color:#7d7979">请选择</view>
								</picker>
								<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 36rpx;transform: rotate(-90deg);color: #999;"></icon>
							</view>
						</view>
						<view class="search-list">
							<text>返贫原因</text>
							<view class="" style="display: flex;height: 100%;align-items: center;">
								<picker mode="date" :value="startDate" fields="year" start="1949" :end="endDate" @change="startDateChange">
									<view class="picker" v-if="startDate != ''">{{startDate}} <text v-if="startDate != ''">年</text>
									</view>
									<view v-else class="picker" style="color:#7d7979">请选择</view>
								</picker>
								<icon class="iconfont iconzuojiantou" slot="header_left" style="font-size: 36rpx;transform: rotate(-90deg);color: #999;"></icon>
							</view>
						</view> 
						<view class="search-list">
							<text>户主姓名</text>
							<input type="text" v-model="name" placeholder="请输入户主姓名" style="margin-right: 20rpx;" />
						</view>
						<view class="search-list">
							<text>身份证号</text>
							<input type="text" v-model="idcode" placeholder="请输入身份证号码" style="margin-right: 20rpx;" />
						</view>
					</view>
				</view>
				<button class="btn" id="btn" style="height: 100rpx;" type="primary" @click="onsubmit">确认</button>
			</scroll-view>




		</view>
	</view>
</template>
<script>
	//身份证校验
	var reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx]$/;
	var cjreg =
		/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx][1-7][1-4]$/;
	export default {
		data() {
			return {
				name: '',
				idcode: '',
				startDate: '',
				typeArray: [],
				typeIndex: '',
				qhztype: [],
				cityBool: false,
				xianBool: false,
				xiangBool: false,
				cunBool: false,
				cityName: "",
				xianName: "",
				cunName: "",
				xiangName: "",
				title: '搜索',
				scrollerHeight: "",
				hfcArray: [],
				hfcIndex: '',
				qtotyppe: [],
				problemArray: ['是', '否'],
				pjArray:['十分满意','满意','基本满意','不满意'],
				pjValue:['3','2','1','0'],
				pjIndex:'',
				problemIndex: '',
				isproblemarr: ['1', '2'],
				btnHeight: "",
				page: {
					page: 1,
					pagesize: 1,
					state: ''
				},
				pagesource: '',
				areaCode: '',
				cityNameList: [],
				cityCodeList: [],
				cityIndex: '',
				countyNameList: [],
				countyCodeList: [],
				countyIndex: '',
				villagesNameList: [],
				villagesCodeList: [],
				villagesIndex: '',
				cunNameList: [],
				cunCodeList: [],
				cunIndex: '',
				endDate: ""
			}
		},
		onLoad(options) {
			this.getAreaCode('360000000000'); // 获取江西省所有的市
			this.pagesource = options.pagesource;
			this.getHfcType();
			this.getHeight();
			this.getNums();
			var date = new Date();
			this.endDate = date.getFullYear();
		},
		methods: {
			getNums() {
				var _this = this;
				uni.showLoading()
				this.$api.tongji().then(res => {
					console.log(res);
					uni.hideLoading();
					var data = res.LIST[0];
					_this.level = data.AREA_LEVEL;
					if (_this.level == '2') {
						_this.cityName = data.CITY_NAME;
						_this.cityBool = true;
						_this.areaCode = data.ROOT_AREA_CODE;
						_this.getCountyAreaCode(_this.areaCode)
					};
					if (_this.level == '3') {
						_this.cityName = data.CITY_NAME;
						_this.xianName = data.COUNTT_NAME;
						_this.cityBool = true;
						_this.xianBool = true;
						_this.areaCode = data.ROOT_AREA_CODE;
						_this.getVillagesAreaCode(_this.areaCode);

					};
					if (_this.level == '4') {
						_this.cityName = data.CITY_NAME;
						_this.xianName = data.COUNTT_NAME;
						_this.xiangName = data.TOWN_NAME;
						_this.cityBool = true;
						_this.xianBool = true;
						_this.xiangBool = true;
						_this.areaCode = data.ROOT_AREA_CODE;
						_this.getCunAreaCode(_this.areaCode);
					};
					if (_this.level == '5') {
						_this.cityName = data.CITY_NAME;
						_this.xianName = data.COUNTT_NAME;
						_this.xiangName = data.TOWN_NAME;
						_this.cunName = data.VILLAGE_NAME;
						_this.cityBool = true;
						_this.xianBool = true;
						_this.xiangBool = true;
						_this.cunBool = true;
						_this.areaCode = data.ROOT_AREA_CODE
					};

					// _this.tjNum.hs=res.FAMILYS_NUM;
					// _this.tjNum.wt=res.TOILETS_NUM;
					// _this.tjNum.wzg=res.WZG_NUM;
					// _this.tjNum.yzg=res.YZG_NUM;
					// uni.setStorageSync('areaCode',res.LIST[0].ROOT_AREA_CODE); 
					// if(res.LIST[0].AREA_LEVEL=='5'){
					// 	_this.showBool=true;
					// }else{
					// 	_this.showBool=false;
					// }; 
				}).catch(err => {

				})
			},

			// 获取行政区划
			getAreaCode(areaCode) {
				this.$api.getAreaCode({
					areaCode: areaCode
				}).then(res => {
					res.postObj.map(item => {
						this.cityNameList.push(item.areaName)
						this.cityCodeList.push(item.areaCode)
					})
				}).catch(err => {
					console.log(err)
				})
			},
			// 通过城市code获取县数据
			getCountyAreaCode(areaCode) {
				this.$api.getChildAreaCode({
					parentId: areaCode
				}).then(res => {
					console.log(res)
					this.countyNameList = [];
					this.countyCodeList = [];
					res.map(item => {
						this.countyNameList.push(item.areaName)
						this.countyCodeList.push(item.areaCode)
					})
					// 清空县、乡镇、村选中的数据
					this.countyIndex = ''
					this.villagesIndex = ''
					this.cunIndex = ''
				}).catch(err => {
					console.log(err)
				})
			},
			// 通过县code获取乡镇数据
			getVillagesAreaCode(areaCode) {
				this.$api.getChildAreaCode({
					parentId: areaCode
				}).then(res => {
					this.villagesNameList = [];
					this.villagesCodeList = [];
					res.map(item => {
						this.villagesNameList.push(item.areaName)
						this.villagesCodeList.push(item.areaCode)
					})
					// 清空乡镇、村选中的数据
					this.villagesIndex = ''
					this.cunIndex = ''
				}).catch(err => {
					console.log(err)
				})
			},
			// 通过乡镇code获取村数据
			getCunAreaCode(areaCode) {
				this.$api.getChildAreaCode({
					parentId: areaCode
				}).then(res => {
					console.log(res)
					this.cunNameList = []
					this.cunCodeList = []
					res.map(item => {
						this.cunNameList.push(item.areaName)
						this.cunCodeList.push(item.areaCode)
					})
					// 清空村选中的数据
					this.cunIndex = ''
				}).catch(err => {
					console.log(err)
				})
			},
			back() {
				uni.navigateBack()
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
				// _this.$nextTick(function() {
				// 	query.select('#btn').boundingClientRect(data => {
				// 		_this.scrollerHeight = (_this.scrollerHeight - data.height)+'px'; 
				// 	}).exec();
				// })
				console.log(_this.scrollerHeight)
			},
			getHfcType() {
				this.$api.getTzData(this.page).then(res => {
					let data = res.SEARCH_LIST;
					if (data.length > 0) {
						data.forEach(item => {
							if (item.DTYPE == 'CSLX') {
								this.hfcArray.push(item.DICT_NAME);
								this.qtotyppe.push(item.DICT_VALUE);
							} else if (item.DTYPE == 'HZLX') {
								this.typeArray.push(item.DICT_NAME);
								this.qhztype.push(item.DICT_VALUE);
							}

						});
					}
				}).catch(err => {

				});
			},
			// 选择城市
			cityChange(data) {
				this.cityIndex = data.detail.value
				this.areaCode = this.cityCodeList[this.cityIndex]
				// 通过城市code获取县数据
				this.getCountyAreaCode(this.areaCode)
			},
			// 选择县
			countyChange(data) {
				this.countyIndex = data.detail.value
				this.areaCode = this.countyCodeList[this.countyIndex]
				// 通过县code获取乡镇数据
				this.getVillagesAreaCode(this.areaCode)
			},
			// 未选择市时点击县
			clickCounty() {
				this.$toast('请先选择市')
			},
			// 选择乡镇
			villagesChange(data) {
				this.villagesIndex = data.detail.value
				this.areaCode = this.villagesCodeList[this.villagesIndex]
				// 通过乡镇code获取村数据
				this.getCunAreaCode(this.areaCode)
			},
			// 未选择市、县时点击乡镇
			clickVillages() {
				this.$toast('请先选择县')
			},
			// 选择村
			cunChange(data) {
				this.cunIndex = data.detail.value
				this.areaCode = this.cunCodeList[this.cunIndex]
			},
			// 未选择市、县、乡镇时点击村
			clickCun() {
				this.$toast('请先选择乡镇')
			},
			startDateChange(date) {
				this.startDate = date.detail.value;
			},
			typeChange(data) {
				this.typeIndex = data.detail.value;
			},
			typehfc(data) {
				this.hfcIndex = data.detail.value;

			},
			isproblem(data) {
				this.problemIndex = data.detail.value;
			},
			ispj(data) {
				this.pjIndex = data.detail.value;
			},
			onsubmit() {
				if (this.idcode != '') {
					if (reg.test(this.idcode) || cjreg.test(this.idcode)) {

					} else {
						this.$toast('身份证格式错误');
						return false
					}
				};
				uni.showLoading({
					title: '加载中...'
				});
				//台账查询
				let formObj = {
					AREACODE: this.areaCode, //行政区划
					QNAME: this.name, //名字
					QSFZ: this.idcode, //身份证号码
					QHZTYPE: this.qhztype[this.typeIndex] || '',
					QTOTYPPE: this.qtotyppe[this.hfcIndex] || '',
					QTOYEAR: this.startDate,
					QISPRO: this.isproblemarr[this.problemIndex] || '',
					QTYPE: this.pjValue[this.pjIndex] || ''
				};
				//let dataList = JSON.stringify(formObj);
				uni.hideLoading();
				uni.$emit('changeSearch', formObj);
				uni.navigateBack({
					delta: 1
				})
				// if (this.pagesource == 'tz') { //台账
				// 	wx.navigateTo({
				// 		url: '../wjList/wjList?dataList=' + dataList
				// 	});
				// }
				// if (this.pagesource == 'zg') { //整改
				// 	wx.navigateTo({
				// 		url: '../wjzg/wjzg?dataList=' + dataList
				// 	});
				// }
			}
		}
	}
</script>

<style scoped='scoped'>
	.scroll-panel {
		height: calc(100vh - 76px);
	}

	.content-panel {}

	.title-block {
		padding: 10px;
		text-align: left;
		color: #666666;
		background: #F5F9FD;
	}

	.search {
		border-top: 1rpx solid #E0E6E4;
		background: #F7F7F7;
	}

	.search-list {
		width: 100%;
		height: 96rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30rpx;
		padding: 0 32rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #EDEDED, 0rpx -2rpx 0rpx 0rpx #EDEDED;
		box-sizing: border-box;
	}

	.search-list>text {
		display: inline-block;
		width: 40%;
		color: #333333;
	}

	.search-list>input {
		width: 60%;
		text-align: right;
		padding: 0 10rpx;
		box-sizing: border-box;
	}

	.picker {
		width: 54vw;
		height: 84rpx;
		line-height: 84rpx;
		font-size: 30rpx;
		text-align: right;
	}

	.section {
		padding: 40rpx 46rpx;
		border-bottom: 1rpx solid #E0E6E4;
	}

	.btn {
		width: calc(100% - 60rpx);
		margin: 30rpx 30rpx;
		background-color: #446BCF !important;
		font-size: 36rpx;
	}
</style>
