//index.js
//获取应用实例
const app = getApp()
const { formatTime } = require('../../utils/util')
const { createFormJson } = require('../../common/createFormJson')
Page({
  data: {
    current: 'searchCar',
    carFormData: [
      {
        icon: 'icon-location',
        iconStyle: 'color:green',
        type: 'text',
        name: 'started',
        value: '',
        label: '从',
        placeholder: '请选择您的位置'
      },
      {
        icon: 'icon-locationfill',
        iconStyle: 'color:red',
        type: 'text',
        name: 'ended',
        value: '',
        label: '到',
        placeholder: '您将要到哪里去'
      },
      {
        icon: 'icon-calendar',
        iconStyle: '',
        name: 'beginTime',
        value: '',
        formType: 'calendar'
      },
      {
        icon: 'icon-friend',
        iconStyle: '',
        type: 'number',
        name: 'number',
        value: 1,
        label: '人数',
        placeholder: '输入乘坐的人数'
      },

      {
        icon: 'icon-moneybag',
        iconStyle: '',
        type: 'number',
        name: 'price',
        value: '',
        label: '价格',
        placeholder: '输入您的期望价格'
      },
      {
        icon: 'icon-emoji',
        iconStyle: '',
        type: 'textarea',
        name: 'remarks',
        value: '',
        label: '留言',
        placeholder: '请留言......'
      }
    ],
    manFormData: [
      {
        icon: 'icon-location',
        iconStyle: 'color:green',
        type: 'text',
        name: 'started',
        value: '',
        label: '从',
        placeholder: '请选择您的位置'
      },
      {
        icon: 'icon-locationfill',
        iconStyle: 'color:red',
        type: 'text',
        name: 'ended',
        value: '',
        label: '到',
        placeholder: '您将要到哪里去'
      },
      {
        icon: 'icon-calendar',
        iconStyle: '',
        name: 'beginTime',
        value: '',
        formType: 'calendar'
      },
      {
        icon: 'icon-friend',
        iconStyle: '',
        type: 'number',
        name: 'number',
        value: 4,
        label: '座位',
        placeholder: '输入车辆的座位数'
      },

      {
        icon: 'icon-moneybag',
        iconStyle: '',
        type: 'number',
        name: 'price',
        value: '',
        label: '单价',
        placeholder: '输入单乘客应付的金额'
      },
      {
        icon: 'icon-emoji',
        iconStyle: '',
        type: 'textarea',
        name: 'remarks',
        value: '',
        label: '留言',
        placeholder: '请留言......'
      }
    ],
    formValues: ''
  },
  //事件处理函数

  handleChange: function({ detail }) {
    this.setData({
      current: detail.key
    })
  },

  setValues(value) {
    this.setData({
      formValues: value
    })
  },
  onPublish() {
    let data = createFormJson(this.data.formValues.detail)
    let params = {}
    params.type = this.data.current === 'searchCar' ? 0 : 1
    Object.assign(params, data)
    console.log(params)
    wx.request({
      url: 'http://192.168.43.125:3009/v1/room/createOrder',
      data: params,
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
    // wx.navigateTo({
    //   url: '/pages/publish/publish',
    //   success(e) {
    //     console.log(e)
    //   }
    // })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
