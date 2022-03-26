const express = require('express')
const router = express.Router()

router.get('/getUserInfo', (req, res) => {
  res.send('我是user的相应参数')
})

module.exports = router
