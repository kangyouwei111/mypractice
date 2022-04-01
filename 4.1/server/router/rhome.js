let express = require('express')
let router = express.Router()
let coldemo = require('../db/index')

router.get('/insert', (req, res) => {
  let usercol = new coldemo({
    name: '康帅哥',
    age: 8,
  })
  usercol.save().then((ok) => {
    console.log('555', ok)
  })
  res.send('这是插入的页面')
})

module.exports = router
