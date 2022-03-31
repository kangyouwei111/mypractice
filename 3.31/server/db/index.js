let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/kyw')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('数据库连接成功')
})

//5设置schema对象
let dbschema = new mongoose.Schema({
  name: String,
  age: Number,
})

let coldemo = mongoose.model('demo', dbschema)
// 6设置集合

module.exports = coldemo
