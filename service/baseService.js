const Get = (url, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}
const Post = (url, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}
module.exports = {
  Get,
  Post
}
