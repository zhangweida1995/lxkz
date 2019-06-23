// components/formComponents/lx-input/lx-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    iconStyle: String,
    label: String,
    name: String,
    value: String,
    type: {
      type: String,
      optionalTypes: [String, Number],
      value: 'text'
    },
    placeholder: String
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    oninput(e) {
      this.triggerEvent('oninput', e)
    }
  }
})
