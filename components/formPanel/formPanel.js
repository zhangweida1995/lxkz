// components/formPanel.js
Component({
  lifetimes:{
    attached(){
      console.log(this.data.imports)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    formData:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imports:[
      { url: "/components/formComponents/lx-input/lx-input.wxml" },
      { url: "/components/formComponents/lx-picker/lx-picker.wxml"}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeValue(val){
      console.log(val)
      this.triggerEvent('change',val)
    }
  }
})
