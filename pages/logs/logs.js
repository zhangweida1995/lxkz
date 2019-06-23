//logs.js
const util = require('../../utils/util.js')
const { Get } = require('../../service/baseService')
const api = require('../../apiConfig/index.js')
Page({
  data: {
    logs: []
  },
  getData() {
    Get(api.logApi.getList, { key: '8877ecf679b8aae20ffadf900cbc991e' })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
