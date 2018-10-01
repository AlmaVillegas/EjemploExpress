var express= require('express')
var app=express()

var port= process.env.PORT || 8080

app.get('/', function(rep,res){
    res.json({mensaje: '¡Hola mundo!'})
    })
app.get('/cerverzas', function(rep,res){
    res.json({mensaje:'¡A beber cerveza!'})
})
app.post('/', function(rep,res){
    res.json({mensaje: 'Método delete'})
})
/////iniciamos nuestro servidor
app.listen(port)
console.log('Api escuchado en el puerto'+ port)