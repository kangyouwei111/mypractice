let express = require('express')
let router = express.Router()

router.get('/insertData', (req, res) => {
  res.send('这是插入的接口')
})

module.exports = router
