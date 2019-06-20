const path = require('path')
const heroModel = require(path.join(__dirname, '../modal/heroModel'))
// 基地址
const baseURL = 'http://localhost:4399/imgs/'
module.exports = {
  all(req, res) {
    const heros = heroModel.all()
    if(heros){
      return res.send({
        code:200,
        msg:'数据获取成功',
        data:heros
      })
    }
    res.send({
      code:400,
      msg:'获取失败，请重试'
    })
    
  },
  id(req,res){
    // res.send('id')
    const data = heroModel.id({id:req.query.id})
    if(data){
      return res.send({
        code:200,
        msg:'获取成功',
        data
      })
    }
    res.send({
      code:400,
      code:'获取失败'
    })
  },
  add(req,res){
    // res.send('/add')
    // 获取信息
    const {skill,name} = req.body
    const {filename} = req.file
    const icon = baseURL+filename
    if(heroModel.add({
      skill,name,icon
    })){
      return res.send({
        code:201,
        msg:'新增成功'
      })
    }
    res.send({
      code:400,
      msg:'新增失败,请检查'
    })
  }
}
