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

/*

const files = require.context('./',false,/\.js$/)
files.keys().forEach(key=>{
	let fileApi = key.replace(/(\.\/|\.js)/g, '')
	joinUrl(fileApi)
})

*/

module.exports = {
  logApi,
  pubApi
}
