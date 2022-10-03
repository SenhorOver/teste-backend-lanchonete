const express = require('express')

const {router} = require('./routes/routes')
const {serverInit} = require('./database/db')

const app = express()

// Conectando com a Database
serverInit()

// Configurando rotas
app.use('/', router)


// Iniciando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log('Server is listening to port', port))