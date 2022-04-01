let express = require('express')
let server = express()

let rhome = require('./router/rhome')
let ruser = require('./router/ruser')

server.use('/', (req, res, next) => {
  //解决跨域
  res.header('Access-Control-Allow-Origin', '*')

  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  )

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS')
  next()
})

server.use('/home', rhome)
server.use('/user', ruser)

server.listen(8000)
