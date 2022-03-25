let http = require('http')
let url = require('url')
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
    if (url.parse(req.url).pathname === '/favicon.ico') {
      return
    }
    console.log(url.parse(req.url))
    if (url.parse(req.url).pathname === '/home') {
      res.end('home')
    } else {
      res.end('heieihie')
    }
  })
  .listen(3000)
