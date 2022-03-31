let express = require('express')
let router = express.Router()

let coldemo = require('../db3/index')
router.get('/getData', (req, res) => {
  coldemo.find().then((res) => {
    console.log(res)
  })
  res.send('这是查询的接口')
})

module.exports = router
