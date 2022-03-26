const express = require('express')
const server = express()

const home = require('./router/home')
const cart = require('./router/cart')
const user = require('./router/user')

server.use('/home', home)
server.use('/cart', cart)
server.use('/user', user)

server.listen(8888)
