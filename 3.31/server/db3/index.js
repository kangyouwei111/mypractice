let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/kyw')
let db = mongoose.connection
db.on('error', console.error.bind(console, '数据库连接失败'))
db.once('open', (res) => {
  console.log('数据库连接成功')
})

let dbSchema = mongoose.Schema({
  name: String,
  age: Number,
})

let coldemo = mongoose.model('demos', dbSchema)

module.exports = coldemo
