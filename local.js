const setUserName= function(userName) {
	if(userName && userName != '') {
		uni.setStorageSync('zhName', userName)
	} else {
		uni.removeStorageSync('zhName')	
	}
	
}


const getUserName = function() {
	// console.log('getLoginInfo start...')
	const userName = uni.getStorageSync('zhName');
	if(userName) {
		return  userName 
	} else {
		return {};
	}
}

const setPhone = function(phone) {
	if(phone && phone != '') {
		uni.setStorageSync('phone',  phone)
	} else {
		uni.removeStorageSync('phone')	
	}
}

const getPhone = function() {
	const phone = uni.getStorageSync('phone');
	if(phone) {
		return  phone
	} else {
		return {};
	}
} 
const setUserId = function(userId) {
	if(userId && userId != '') {
		uni.setStorageSync('userId',  userId)
	} else {
		uni.removeStorageSync('userId')	
	}
}

const getUserId = function() {
	const userId = uni.getStorageSync('userId');
	if(userId) {
		return  userId
	} else {
		return {};
	}
} 
export default {
	setUserName,
	getUserName,
	setPhone,
	getPhone,
	setUserId,
	getUserId
}