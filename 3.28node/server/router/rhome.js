let express = require('express')
let router = express.Router()

router.get('/getUserList', (req, res) => {
  res.send('查询接口返回的数据')
})

module.exports = router
