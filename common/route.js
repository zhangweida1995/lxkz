const _navgationTo = url => {
  wx.navigateTo({
    url: url,
    complete(e) {
      console.log(e)
    }
  })
}

module.exports = {
  _navgationTo
}
