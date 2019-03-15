// pages/compass/compass.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		position: "",
		positionNumber: 0,
		accuracy: "",
	},
  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		/* 
		{accuracy:"high", direction:253.93016}
		*/
		wx.startCompass({
			success: () => {
				console.log("成功")
				wx.onCompassChange(res => {
					if (res.accuracy == "high" || res.accuracy == "medium" || res.accuracy) {
						this.setData({
							positionNumber: parseInt(res.direction)
						})
						switch (true) {
							case res.direction == 0:
								this.fnSetData("北方")
								break;
							case res.direction == 90:
								this.fnSetData("东方")
								break;
							case res.direction == 180:
								this.fnSetData("南方")
								break;
							case res.direction == 270:
								this.fnSetData("西方")
								break;
							case res.direction > 0 && res.direction < 90:
								this.fnSetData("东北方")
								console.log(this)
								break;
							case res.direction > 90 && res.direction < 180:
								this.fnSetData("东南方")
								console.log(this)
								break;
							case res.direction > 180 && res.direction < 270:
								this.fnSetData("西南方")
								console.log(this)
								break;
							case res.direction > 270:
								this.fnSetData("西北方")
								console.log(this)
								break;
						}
					}
				})
			},
			fail() {
				console.log("失败")
			},
			complete() {
				console.log("调用了罗盘")
			}
		})
	},
	fnSetData: function (po) {
		console.log(po)
		this.setData({
			position: po
		})
	},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {

	},

  /**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {
    console.log("onShow")
	},

  /**
   * 生命周期函数--监听页面隐藏
   */
	onHide: function () {
    console.log("onHide")
	},

  /**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {
    wx.stopCompass({
      success: () => {
        console.log("关闭成功")
      }
    })
	},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
	onPullDownRefresh: function () {

	},

  /**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {

	},

  /**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {

	}
})