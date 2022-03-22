import http from './interface' 

//首页台账数量
const getZc= function(userId) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.FPZC_ZC_TJ&cmd.sqlType=proc&cmd.USER_ID="+userId); 
};
//资产维护列表
const getzcWh= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.FPZC_ZC_LIST&cmd.sqlType=proc",params); 
};
//资产维护列表详情
const getzcWhDetail= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GETZCINFOBYID&cmd.sqlType=proc",params); 
};
//资产打卡
const getzcDk= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.ADD_XJ_LOG&cmd.sqlType=proc",params); 
};
//资产打卡记录
const getdkHistory= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GETHISDKLOGLIST&cmd.sqlType=proc",params); 
};
//修改密码
const updatePwd= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=LOGIN_PKS.MODIFY_VALID&cmd.sqlType=proc",params); 
}; 
//判断是否有openid
const sfOpenid= function(params) {
	return http.post("/LoginByOpenId",params); 
}; 
//解绑openid
const jbOpenid= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=FZFP_XCX_PKS.JCBIND&cmd.sqlType=proc",params); 
}; 
//解绑农户的openid
const jbpOpenid= function(params) {
	return http.post("/queryMessage?cmd.sqlKey=FZFP_XCX_PKS.JCBINDCARD&cmd.sqlType=proc",params); 
}; 
//订阅次数
const dyNums= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=FZFP_XCX_PKS.ADD_SEND_CS&cmd.sqlType=proc",params); 
}; 
//审核列表
const shList= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GET_SH_LIST&cmd.sqlType=proc",params); 
}; 
//审核详情
const shDetail= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GET_XMXQ_BYID&cmd.sqlType=proc",params); 
}; 
//提交审核
const subSH= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=PROJECT_SB_JS.YSSH&cmd.sqlType=proc",params); 
}; 
 //财政评审
 const czpsList= function(params) {
 	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GET_SH_LIST_CZ&cmd.sqlType=proc",params); 
 }; 
 //财政评审详情
 const czpsDetail= function(params) {
 	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GET_XMXQ_BYID_CZ&cmd.sqlType=proc",params); 
 }; 
 //财政评审提交
 const czpsSub= function(params) {
 	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=PROJECT_SB_JS.CZSH&cmd.sqlType=proc",params); 
 };  
//消息列表
const getMsg= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=TBL_FZFP_LQ_PKS.FFP_RH_XXLB_LIST&cmd.sqlType=proc&cmd.QREGIONID=1",params); 
}; 
//点击推送
const totuisong= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=FZFP_XCX_PKS.UPD_READ&cmd.sqlType=proc",params); 
};
//消息列表详情
const getMsgDetail= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.READ_MESSAGE&cmd.sqlType=proc",params); 
}; 
//订阅数量
const getdyNums= function(params) {
	return http.post("/loadDataReturnJsonDAOP.action?cmd.sqlKey=FZFP_XCX_PKS.GETCSBYOPENID&cmd.sqlType=proc",params); 
}; 
//审核数量
const getshNums= function(params) {
	return http.get("/loadDataReturnJsonDAOP.action?cmd.sqlKey=XCX_WK.GETWCLNUMBYUID&cmd.sqlType=proc",params); 
}; 
//财政评审数量
const getczNums= function(params) {
	return http.get("/accessToken/loadDataByToken?cmd.sqlKey=XCX_WK.GETWCLNUMBYUID_CZ&cmd.sqlType=proc",params); 
}; 
 
export default {
	getZc, 
	getzcWh,
	getzcWhDetail,
	getzcDk,
	getdkHistory,
	updatePwd,
	sfOpenid,
	jbOpenid,
	jbpOpenid,
	dyNums,
	shList,
	shDetail,
	subSH,
	getMsg,
	getMsgDetail,
	getdyNums,
	getshNums,
	czpsList,
	czpsDetail,
	czpsSub,
	getczNums,
	totuisong
};
 

