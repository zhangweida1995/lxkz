const logApi = require('./logApi.js')
const {prod} = require('../baseUrl.js')

function joinUrl(someApi){
  Object.keys(someApi).map(key=>{
    someApi[key] = `${prod.domain}${someApi[key]}`
  })
}
joinUrl(logApi)
console.log(logApi)

module.exports = {
  logApi
}