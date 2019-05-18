// components/canlander/canlander.js
var dateTimePicker = require('../../utils/dateTimePicker.js');

Component({
  lifetimes: {
    attached() {
      // 获取完整的年月日 时分秒，以及默认显示的数组
      var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
      var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
      // 精确到分的处理，将数组的秒去掉
      var lastArray = obj1.dateTimeArray.pop();
      var lastTime = obj1.dateTime.pop();

      this.setData({
        dateTime: obj.dateTime,
        dateTimeArray: obj.dateTimeArray,
        dateTimeArray1: obj1.dateTimeArray,
        dateTime1: obj1.dateTime
      });
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    iconStyle: String,
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
      dateTimeArray1: null,
      dateTime1: null,
      startYear: 2000,
      endYear: 2050
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //选择时间方法
    changeDate(e) {
      this.setData({
        date: e.detail.value
      });
    },
    changeTime(e) {
      this.setData({
        time: e.detail.value
      });
    },
    changeDateTime(e) {
      console.log(e)
      this.setData({
        dateTime: e.detail.value
      });
    },
    changeDateTime1(e) {
      this.setData({
        dateTime1: e.detail.value
      });
    },
    changeDateTimeColumn(e) {
      console.log(e)
      var arr = this.data.dateTime,
        dateArr = this.data.dateTimeArray;

      arr[e.detail.column] = e.detail.value;
      dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

      this.setData({
        dateTimeArray: dateArr,
        dateTime: arr
      });
    },
    changeDateTimeColumn1(e) {
      console.log(e)
      var arr = this.data.dateTime1,
        dateArr = this.data.dateTimeArray1;

      arr[e.detail.column] = e.detail.value;
      dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

      this.setData({
        dateTimeArray1: dateArr,
        dateTime1: arr
      });
    }
  }
})
