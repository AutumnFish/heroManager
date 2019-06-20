const express = require('express')
const router = express.Router()
const path = require('path')
const { check, validationResult } = require('express-validator/check')
const bodyParser = require('body-parser')

// 管理器
const heroController = require(path.join(
  __dirname,
  '../controllers/heroControllers'
))
// 解析post数据
router.use(bodyParser.urlencoded({ extended: false }))

// 获取所有英雄
router.get('/all', heroController.all)
// 根据id获取英雄
router.get(
  '/id',
  [
    // username must be an email
    check('id')
      .not()
      .isEmpty()
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    // console.log(errors);
    res.send({
      code: 400,
      msg: 'id不能为空哦，请检查'
    })
  },
  heroController.id
)

module.exports = router
