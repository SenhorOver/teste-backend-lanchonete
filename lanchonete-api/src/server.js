const express = require('express')

const {router} = require('./routes/routes')

const app = express()



// Configurando rotas
app.use('/', router)


// Iniciando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log('Server is listening to port', port))