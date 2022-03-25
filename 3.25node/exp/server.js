let express = require('express')
let server = express()
server.get('/home', (req, res) => {
  res.send('home')
})

server.listen(3000)
