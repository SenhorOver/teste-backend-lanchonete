const mongoose = require('mongoose')


function connectDb(){
    mongoose.connect('mongodb://localhost:27017/backendAPI')

    const db = mongoose.connection

    db.once('open', () => console.log('Connected to MongoDB'))

    db.on('error', console.error.bind(console, 'Connection error: '))
}



module.exports = {connectDb}