const { prod } = require('../baseUrl.js')
const logApi = require('./logApi.js')
const pubApi = require('./pubApi.js')
function joinUrl(someApi) {
  Object.keys(someApi).map(key => {
    someApi[key] = `${prod.domain}${someApi[key]}`
  })
}
joinUrl(logApi)
joinUrl(pubApi)

module.exports = {
  logApi,
  pubApi
}
