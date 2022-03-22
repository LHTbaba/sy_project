let storage= {
	set(key, value){
		uni.setStorageSync(key,value);
	},
	get(key){
		uni.getStorageSync(key);
	},
	remove(key){
		uni.removeStorageSync(key)
	}
}
export default storage;