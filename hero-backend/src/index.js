const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')
const app = express()

app.use(cors())

// vai possibilitar a captura dos dados atraves do req.body
app.use(express.json())

// aplicando as rotas
app.use(routes)

// tratando os erros da lib de validação
app.use(errors())

// servindo a aplicação
app.listen(3003, () => console.log('> Aplicação rodando na porta: 3003'))
