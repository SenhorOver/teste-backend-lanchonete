const mongoose = require('mongoose')


function connectDb(){
    mongoose.connect('mongodb://127.0.0.1/backendAPI', 
    {useNewUrlParser: true, useUnifiedTopology: true})

    const db = mongoose.connection

    db.once('open', () => console.log('Connected to MongoDB'))

    db.on('error', console.error.bind(console, 'Connection error: '))
}



module.exports = {connectDb}