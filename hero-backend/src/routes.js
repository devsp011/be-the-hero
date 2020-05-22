const express = require('express')
const routes = express.Router()

const ong = require('./controllers/ong')
const incident = require('./controllers/incident')
const session = require('./controllers/session')


// login
routes.post('/sessions', session.create)


// ongs 
routes.get('/ongs', ong.list)
routes.post('/ongs', ong.create)


// listar incidents de uma ong em especifico
routes.get('/profile', incident.listOng)


// incidents
routes.get('/incidents', incident.list)
routes.post('/incidents', incident.create)
routes.delete('/incidents/:id', incident.delete)


module.exports = routes
