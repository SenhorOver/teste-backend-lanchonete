const mongoose = require('mongoose')

const squema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
})


const clientModel = mongoose.model('client', squema)

module.exports = {clientModel}