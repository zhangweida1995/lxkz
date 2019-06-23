const logApi = require('./logApi.js')
const { dev } = require('../baseUrl.js')

function joinUrl(someApi) {
  Object.keys(someApi).map(key => {
    someApi[key] = `${dev.domain}${someApi[key]}`
  })
}
joinUrl(logApi)
module.exports = {
  logApi
}
