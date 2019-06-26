const path = require('path')
const fs = require('fs')
const heroModel = require(path.join(__dirname, '../modal/heroModel'))
module.exports = {
  all(req, res) {
    heroModel.all((err, data) => {
      if (err == null) {
        res.send({
          code: 200,
          msg: '获取成功',
          data
        })
      } else {
        console.log(err)
        res.send({
          code: 400,
          msg: '获取失败'
        })
      }
    })
  },
  id(req, res) {
    // res.send('id')
    heroModel.id({
      id: req.query.id,
      callback(err, data) {
        if (err == null && data.length != 0) {
          res.send({
            msg: '获取成功',
            code: 200,
            data: data[0]
          })
        } else {
          res.send({
            msg: 'id可能不对哦',
            code: 400
          })
        }
      }
    })
  },
  add(req, res) {
    // res.send('/add')
    // 获取信息
    const { skill, name } = req.body
    const { filename } = req.file
    const icon = `imgs/${filename}`
    console.log(icon)
    heroModel.add({
      skill,
      name,
      filename,
      icon,
      callback(err, data) {
        if (err == null) {
          res.send({
            code: 201,
            msg: '新增成功'
          })
        } else {
          res.send({
            code: 400,
            msg: '失败了哦，请检查'
          })
        }
      }
    })
  },
  delete(req, res) {
    // res.send("/delete")
    heroModel.delete({
      id: req.query.id,
      callback(err, data) {
        if (err == null) {
          res.send({
            code: 204,
            msg: '删除成功'
          })
        } else {
          console.log(err)
          res.send({
            code: 400,
            msg: '删除失败'
          })
        }
      }
    })
  },
  update(req, res) {
    // res.send('update')
    const { skill, name, id } = req.body
    let icon = undefined
    if(req.file){
      icon =`imgs/${req.file.filename}`  
    }
    heroModel.update({
      id,skill,name,icon,callback(err,results){
        if(err==null){
          res.send({
            code:202,
            msg:'修改成功'
          })
        }else{
          console.log(err)
          res.send({
            code:400,
            msg:'修改失败'
          })
        }
      }
    })
  }
}
