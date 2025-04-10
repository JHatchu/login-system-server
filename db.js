const mysql = require('mysql2/promise')

const pool = mysql.createPool({
host:'localhost',
user:'root',
password:'12345',
database:'transSphere',
port:3306,
})

module.exports = pool;