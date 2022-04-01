let express = require('express')
let router = express.Router()
let usercol = require('../db/index')
router.get('/query', (req, res) => {
  usercol.find().then((ok) => {
    console.log('666', ok)
    res.send({ msg: '这是查询的数据', data: ok })
  })
})

module.exports = router
