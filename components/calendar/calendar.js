// components/canlander/canlander.js
var dateTimePicker = require('../../utils/dateTimePicker.js')

Component({
  lifetimes: {
    attached() {
      // 获取完整的年月日 时分秒，以及默认显示的数组
      var obj = dateTimePicker.dateTimePicker(
        this.data.startYear,
        this.data.endYear
      )
      var obj1 = dateTimePicker.dateTimePicker(
        this.data.startYear,
        this.data.endYear
      )
      // 精确到分的处理，将数组的秒去掉
      var lastArray = obj1.dateTimeArray.pop()
      var lastTime = obj1.dateTime.pop()

      this.setData({
        dateTime: obj1.dateTime,
        dateTimeArray: obj1.dateTimeArray
      })
      this.triggerEvent('ondateTime', this.createDateTime())
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    iconStyle: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    data: {
      date: '2018-10-01',
      time: '12:00',
      dateTimeArray: null,
      dateTime: null,
      startYear: 2000,
      endYear: 2050
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    createDateTime() {
      let [year, month, day, hour, minute] = [
        this.data.dateTimeArray[0][this.data.dateTime[0]],
        this.data.dateTimeArray[1][this.data.dateTime[1]],
        this.data.dateTimeArray[2][this.data.dateTime[2]],
        this.data.dateTimeArray[3][this.data.dateTime[3]],
        this.data.dateTimeArray[4][this.data.dateTime[4]]
      ]

      return `${year}-${month}-${day} ${hour}:${minute}`
    },
    //选择时间方法
    changeDateTime(e) {
      this.setData({
        dateTime: e.detail.value
      })
      this.triggerEvent('ondateTime', this.createDateTime())
    },
    changeDateTimeColumn(e) {
      var arr = this.data.dateTime,
        dateArr = this.data.dateTimeArray

      arr[e.detail.column] = e.detail.value
      dateArr[2] = dateTimePicker.getMonthDay(
        dateArr[0][arr[0]],
        dateArr[1][arr[1]]
      )
      this.setData({
        dateTimeArray: dateArr,
        dateTime: arr
      })
    }
  }
})
