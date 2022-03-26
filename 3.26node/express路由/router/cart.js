const express = require('express')
const router = express.Router()

router.get('/getCartList', (req, res) => {
  res.send('我是cart的相应参数')
})

module.exports = router
