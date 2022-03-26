let express = require('express')

let server = express()

// server.get('/', (req, res) => {
//   res.send({ code: 200, data: { message: '请求成功' } })
// })

server.get('/home', (req, res) => {
  res.send({ code: 200, data: { message: '请求成功' } })
})

server.listen(4000)
