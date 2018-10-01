var router = require('express').Router()
var cervezas = require('./cervezas')

router.use('/cervezas', cervezas)

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router