const mongoose = require('mongoose')


const squema = mongoose.Squema({
    name: String,
    email: String,
    phone: Number,
    address: String
})


const clientModel = mongoose.model('client', squema)

module.exports = {clientModel}