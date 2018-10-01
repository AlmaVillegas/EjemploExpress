var express = require('express')
var router = express.Router()

router.get('/',(rep,res)=>{
    res.json({mensaje: '¡Bienvenido a nuestra Apí'})
})
