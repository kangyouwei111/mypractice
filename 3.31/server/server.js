let express = require('express')
let server = express()

let rhome = require('./router/rhome')
let ruser = require('./router/ruser')

server.use('/home', rhome)
server.use('/user', ruser)

server.listen(3000)
