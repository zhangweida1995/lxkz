// components/formComponents/lx-picker/lx-picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pickerData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
