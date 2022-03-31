let express = require('express')
let router = express.Router()
let coldemo = require('../db3/index')
router.get('/insertData', (req, res) => {
  let usercol = new coldemo({
    name: 'kangkang',
    age: 22,
  })

  usercol.save().then((res) => {
    console.log(res)
  })
  res.send('这是插入接口')
})

module.exports = router
