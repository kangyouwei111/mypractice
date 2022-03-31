//1、引用mongoose
let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017')

//3、开始连接
let db = mongoose.connections
