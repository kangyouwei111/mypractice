let express = require('express')
let router = express.Router()
let dblink = require('../db2/index')
router.get('/insertData', (req, res) => {
  dblink()
  res.send('这是插入接口')
})

module.exports = router
