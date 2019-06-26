const fs = require('fs')
const path = require('path')
const db = require(path.join(__dirname, '../utils/db.js'))

module.exports = {
  all(callback) {
    const sql = `select * from heroplus where isDelete=0`
    db.query(sql, callback)
  },
  // 根据id获取英雄
  id({ id, callback }) {
    const sql = `select * from heroplus where id=?`
    db.query(sql, [id], callback)
  },
  add({ name, skill, icon, callback }) {
    const sql = `insert into heroplus (name,skill,icon) values(?,?,?)`
    db.query({ sql }, [name, skill, icon], callback)
  },
  delete({ id, callback }) {
    const sql = `update heroplus set isDelete = ?`
    db.query(sql, [id], callback)
  },
  update({ id, name, skill, icon,callback }) {
    let sql = ''
    if(icon){
      sql = `update  heroplus set name=?,skill=?,icon=? where id = ?`
      db.query(sql,[name,skill,icon,id],callback)
    }else{
      sql = `update  heroplus set name=?,skill=? where id = ?`
      db.query(sql,[name,skill,id],callback)
    }
    
  }
}
