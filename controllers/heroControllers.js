const path = require('path')
const heroModel = require(path.join(__dirname, '../modal/heroModel'))
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
    
  }
}
