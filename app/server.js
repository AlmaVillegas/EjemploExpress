var express= require('express')
var app = express()
var cors=require('cors')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var port = process.env.PORT || 8080

require('./db')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var router = require('./routes')
app.use('/api',router)

app.listen(port)
console.log('Api escuchado en el puerto '+ port)

module.exports = app