let ocrId = function(data1) {
	return new Promise((resolve, reject)=>{  
		//acess_token获取
		wx.request({
			url: 'https://aip.baidubce.com/oauth/2.0/token', //真实的接口地址
			data: {
				grant_type: 'client_credentials',
				client_id: 'U80rjW5YFvSEVT2kXTQ51LUe',
				client_secret: '9TLa30x2cZx2Eji4bRKiMhIkpuIKyYSN' //用自己的
			},
			header: {
				'Content-Type': 'application/json' // 默认值
			},
			success(res) {
				wx.request({
					url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/idcard?access_token=' + res.data.access_token,
					method: 'POST',
					data: {
						image: data1,
						detect_risk: true,
						detect_photo: true,
						id_card_side: 'front'
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded' // 默认值
					}, 
					success(res) { 
					    resolve(res); 
					},
					fail(err) { 
						reject(err);
					}
				});
				 
			}
		}); 
	})
}; 
export default {
	ocrId, 
}
