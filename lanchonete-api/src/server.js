const express = require('express')
const cors = require('cors')

const {router} = require('./routes/routes')
const {connectDb} = require('./database/db')

const app = express()


// Connect to DataBase
connectDb()


// Allow requests
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'Qualquer Outro'
]
app.use(cors({
    origin: function(origin, callback){
        // No origin requests
        if(!origin) return callback(null, true)

        // Block requests
        if(allowedOrigins.indexOf(origin) === -1) return callback(null, false)

        return callback(null, true)
    }
}))


// JSON
app.use(express.json())


// Routes
app.use('/api', router)


//Starting Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log('Server is open on port', port))