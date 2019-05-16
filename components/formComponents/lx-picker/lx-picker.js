// components/formComponents/lx-picker/lx-picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode:String,
    value:String,
    start:String,
    end:String,
    label:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    bindTimeChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.triggerEvent('change', e.detail.value)
    },
  }
})
