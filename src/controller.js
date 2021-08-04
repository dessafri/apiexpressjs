'use strict'

let response = require('./res')
let connection = require('./koneksi')

exports.index = (req, res) => {
  response.ok('Aplikasi Berjalan dengan baik', res)
}
exports.getAllData = (req, res) => {
  connection.query('SELECT * FROM konsumen', (err, rows, field) => {
    if (err) {
      return err
    } else {
      response.ok(rows, res)
    }
  })
}
