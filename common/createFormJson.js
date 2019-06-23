const createFormJson = data => {
  if (typeof data !== 'undefined' && data.length > 0) {
    let formJson = {}
    data.map(item => {
      formJson[item.name] = item.value
    })
    return formJson
  }
  return {}
}

module.exports = {
  createFormJson
}
