const express = require('express')
const cors = require('cors')

const {router} = require('./routes/routes')
const {serverInit} = require('./database/db')

const app = express()

// Permitindo requisições
const allowedOrigins = [
    'http://127.0.0.1:5500'
]
app.use(cors({
    origin: function(origin, callback){
        
        // Permitindo requisições sem origin
        if(!origin) return callback(null, true)

        // Negando endereços
        if(allowedOrigins.indexOf(origin) === -1) return callback(null, false)

        return callback(null, true)
    }
}))

// Habilita receber dados JSON
app.use(express.json())

// Conectando com a Database
serverInit()

// Configurando rotas
app.use('/api', router)


// Iniciando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log('Server is listening to port', port))