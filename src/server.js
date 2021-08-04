const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const route = require('./routes')

// parser application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// call route
route(app)
app.listen(3000, () => {
  console.log(`Server Started Port ${port}`)
})
