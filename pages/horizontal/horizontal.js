// pages/horizontal/horizontal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gamma: 100,
    beta: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.startDeviceMotionListening({
      interval: "normal",
      success: () => {
        console.log("调用成功")
        wx.onDeviceMotionChange(res => {
          console.log(res)
          this.setData({
            gamma: parseInt(res.gamma),
            beta: parseInt(res.beta),
          })
        })
      },
      fail: () => {
        console.log("调用失败")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    wx.stopDeviceMotionListening({
      success: () => {
        console.log("关闭成功")
      },
      fail: () => {
        console.log("关闭失败")
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})