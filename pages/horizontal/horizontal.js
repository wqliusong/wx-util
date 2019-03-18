// pages/horizontal/horizontal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gamma: 0,
    beta: 0,
    horizontalAnimation: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    console.log(123)
    //微信wx的那些无限请求的方法, 他是经过微信调用然后传到后台, 再回传, 所以时间越长网络耗时越大, 所以真机调试会越来越卡, 但是编译预览, 就不会有问题
    wx.startDeviceMotionListening({
      interval: "game",
      success: () => {
        console.log("调用成功")
        this.animation = wx.createAnimation({
          duration: 200,
          timingFunction: "normal",
        })
        wx.onDeviceMotionChange(res => {
          // console.log(res)
          this.animation.translate(parseInt(res.gamma), parseInt(res.beta)).step({
            duration: 200,
            timingFunction: "normal",
          })
          this.setData({
            horizontalAnimation: this.animation.export(),
            gamma: parseInt(res.gamma),
            beta: parseInt(res.beta)
          })
        })
      },
      fail: () => {
        console.log("调用失败")
      }
    })
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