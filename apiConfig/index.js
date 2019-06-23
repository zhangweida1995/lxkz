const dev = require('./dev/index.js')
const prod = require('./prod/index.js')

const env = dev
console.log(env)
module.exports = env
