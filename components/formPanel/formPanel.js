// components/formPanel.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  lifetimes: {
    attached() {}
  },
  /**
   * 组件的属性列表
   */
  properties: {
    formData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit(e) {},
    oninput({ detail, target }) {
      this.setData({
        [`formData[${target.id}].value`]: detail.detail.value
      })
      this.triggerEvent('setValue', this.properties.formData)
    },
    onDateTime(date) {
      this.setData({
        [`formData[2].value`]: date.detail
      })
    }
  }
})
