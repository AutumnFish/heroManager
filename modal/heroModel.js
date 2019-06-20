const fs = require('fs')
const path = require('path')
module.exports = {
  all() {
    try {
      const heros = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../data/hero.json'), 'utf8')
      )
      return heros
        .filter(v => {
          return !v.isDelete
        })
        .map(v => {
          const { id, icon, name, skill } = v
          return {
            id,
            icon,
            name,
            skill
          }
        })
    } catch (error) {
      return false
    }
  },
  // 根据id获取英雄
  id({ id }) {
    try{
      const filterOne = this.all().filter(v => {
        return id == v.id
      })
      return filterOne[0]
    }catch(err){
      return false
    }
  }
}
