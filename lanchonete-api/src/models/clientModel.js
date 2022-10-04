const mongoose = require('mongoose')

const squema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
})


const ClientModel = mongoose.model('clients', squema)

module.exports = {ClientModel}