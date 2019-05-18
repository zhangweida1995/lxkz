// components/formPanel.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  lifetimes:{
    attached(){
      console.log(this.properties.data)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    formData: {
      type: Array,
      value:[],
    }
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
    getarr(){
      console.log(this.properties.formData)
    }
  }
})
