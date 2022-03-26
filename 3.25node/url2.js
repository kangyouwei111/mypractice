let http = require('http')
let url = require('url')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })

    if (url.parse(req.url).pathname === '/favicon.ico') {
      return
    }
    if (url.parse(req.url).pathname === '/home') {
      res.end('home')
    }

    if (url.parse(req.url).pathname === '/user') {
      res.end('user')
    }
    if (url.parse(req.url).pathname === '/cart') {
      res.end('cart')
    }
    console.log('url', url.parse(req.url))
  })
  .listen(5000)
