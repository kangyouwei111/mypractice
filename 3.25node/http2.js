let http = require('http')
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
    res.end('哈哈哈')
  })
  .listen(4000)
