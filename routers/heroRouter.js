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
router.get('/all',heroController.all)

module.exports = router
