let express = require('express')
let router = express.Router()

router.get('/getData', (req, res) => {
  res.send('这是查询的接口')
})

module.exports = router
