const http = require('http')

let getDisplayTime = cb => {
  const request = http.request({
    hostname: `hello-supro.eu-gb.mybluemix.net`,
    path: `/display?time=${Date.now()}`,
    method: 'GET'
  }, res => {
    res.setEncoding('utf8')
    res.on('data', data => {
      cb(data)
    })
  })
  request.end()
}

module.exports = {
  getDisplayTime: getDisplayTime
}
