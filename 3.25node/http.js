let http = require('http')
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
    res.end('哈哈哈，你好啊')
  })
  .listen(3000)
