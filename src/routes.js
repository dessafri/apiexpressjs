'use strict'

module.exports = (app) => {
  let res = require('./controller')

  app.route('/').get(res.index)
}
