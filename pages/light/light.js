//logs.js
const util = require('../../utils/util.js')

Page({
	data: {
		logs: [],
		lightInfo: 'off'
	},
	openOffLight: function () {
		console.log(this)
		this.setData({
			lightInfo: this.data.lightInfo === 'on' ? 'off' : 'on'
		})
	},
	onLoad: function () {
		wx.authorize({ scope: "scope.camera" })
	}
})
