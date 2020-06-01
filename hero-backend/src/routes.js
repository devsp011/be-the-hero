const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const ong = require('./controllers/ong')
const incident = require('./controllers/incident')
const session = require('./controllers/session')

const routes = express.Router()

// login
routes.post('/sessions', session.create)


// ongs 
routes.get('/ongs', ong.list)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ong.create)


// listar incidents de uma ong em especifico
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), incident.listOng)


// incidents
routes.get('/incidents', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        page: Joi.number()
    })
}), incident.list)

routes.post('/incidents', incident.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incident.delete)


module.exports = routes
