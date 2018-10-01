'use strict'
/* global describe it */
var request = require('supertest')

/*obtenemos nuestra api rest que vamos a testear*/
var app = require('../app/server.js')

describe('Crear una nueva cerveza', function() {
  it('Crea la cerveza retornando 201', function(done) {
    request(app)
      .post('/api/cervezas/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({
        'Nombre': 'DAMN',
        'Descripción': 'Mi cerveza preferida',
        'Graduación': '10º',
        'Envase': 'Bidón',
        'Precio': '1 eurito'
      })
      .expect(201, done)
  })
})