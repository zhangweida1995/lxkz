//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current:'searchCar',
    formData:[
      {
        icon:'icon-location',
        iconStyle:'color:green',
        type:'text',
        value:'',
        label:'从',
        placeholder:'请选择您的位置'
      },
      {
        icon:'icon-locationfill',
        iconStyle:'color:red',
        type: 'text',
        value: '',
        label: '到',
        placeholder: '您将要到哪里去'
      },
      {
        icon: 'icon-calendar',
        iconStyle: '',
        formType: 'canlander'
      },
      {
        icon:'icon-friend',
        iconStyle:'',
        type: 'number',
        value: '',
        label: '人数',
        placeholder: '输入乘坐的人数'
      },
      
      {
        icon:'icon-moneybag',
        iconStyle:'',
        type: 'number',
        value: '',
        label: '价格',
        placeholder: '输入您的期望价格'
      },
      {
        icon:'icon-emoji',
        iconStyle:'',
        type: 'textarea',
        value: '',
        label: '留言',
        placeholder: '请留言......'
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
  
  onPublish(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/publish/publish',
      success(e){
        console.log(e)
      }
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
