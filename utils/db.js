const mysql = require('mysql')
const path = require('path')
const { host, user, password, database } = require(path.join(
  __dirname,
  './config'
))
const connection = mysql.createConnection({
  host,
  user,
  password,
  database
})

module.exports = connection
