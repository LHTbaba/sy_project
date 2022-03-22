//电话号码
const phone1 = /^[0][1-9]{2,3}[0-9]{5,10}$/;
const phone2 = /^1[345789]\d{9}$/;
//身份证校验
const cardId1 = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx]$/;
const cardId2 = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{1}[0-9Xx]\d{1}[0-9Xx][1-7][1-4]$/;
//验证邮箱地址
const email=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//密码是6-20个字符之间，至少包含英文字母、数字、标点符号（除空格）中的两种
const pwd = new RegExp(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/);
//中文名字
const name = /^[\u4E00-\u9FA5]{2,4}$/;
//验证为空
var  isEmpty=function(data){
	if(data==='' || data === null || data == undefined || data.trim() === ''){
		return true
	};
	return false
};
//验证电话号码
var  rulePhone=function(data){
	if(phone1.test(data)||phone2.test(data)){
		
	}else{
		return true
	}
	return false
};
//验证身份证号码
var  ruleId=function(data){
	if(cardId1.test(data)||cardId2.test(data)){
		
	}else{
		return true
	}
	return false
};
//验证邮箱
var  ruleEmail=function(data){
	if(email.test(data)){
		return true
	} 
	return false
};
//验证密码
var  rulePwd=function(data){
	if(pwd.test(data)){
		return true
	} 
	return false
};
//验证中文名字
var  ruleName=function(data){
	if(name.test(data)){
		return true
	} 
	return false
};
export default {
	isEmpty, 
	rulePhone,
	ruleId,
	ruleEmail,
	rulePwd,
	ruleName,
}