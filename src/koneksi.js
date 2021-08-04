const mysql = require('mysql')
let conn = mysql.createConnection({
  host: 'Localhost',
  user: 'root',
  password: '',
  database: 'penjualantempe',
})
conn.connect((err) => {
  if (err) throw err
  console.log('Mysql Terkoneksi')
})

module.exports = conn
