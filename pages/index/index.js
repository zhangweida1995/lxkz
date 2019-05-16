//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current:'searchCar',
    time:'',
    date:'',
    formData:[
      {
        type:'lx-input',
        value:'',
        title:'从',
        placeholder:'从哪儿来'
      },
      {
        type: 'lx-input',
        value: '',
        title: '到',
        placeholder: '到哪儿去'
      },
      {
        type: 'lx-input',
        value: '',
        title: '价格',
        placeholder: '价格'
      },
      {
        type:'lx-picker',
        label:'日期',
        mode:'date',
        value:'2019-9-1',
        start:'2000-1-1',
        end:'2050-1-1'
      },
      {
        type: 'lx-picker',
        label:'时间',
        mode: 'time',
        value: '00:00',
        start: '00:00',
        end: '23:59'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleChange:function({detail}){

    console.log(detail)
    this.setData({
      current:detail.key
    })
  },
  changeValue: function (e) {
    console.log('picker发送选择改变，携带值为', e)
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(this.data.current)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
