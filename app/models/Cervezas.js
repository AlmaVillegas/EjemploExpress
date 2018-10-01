var mongoose = require('mongoose')
var Schema = mongoose.Schema

var cervezaSchema = new Schema({
  Nombre: String, 
  Descripción: String, 
  Graduacion: String,
  Envase: String,
  Precio: String 
})

var Cerveza = mongoose.model('Cerveza', cervezaSchema)

module.exports = Cerveza