const express = require('express')
const router = express.Router()

router.get('/getHomeList', (req, res) => {
  res.send('我是home的相应参数')
})

module.exports = router
