let mongoose = require('mongoose')

function dblink() {
  mongoose.connect('mongodb://127.0.0.1:27017')
  let db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('数据库连接成功')
  })
}

module.exports = dblink
