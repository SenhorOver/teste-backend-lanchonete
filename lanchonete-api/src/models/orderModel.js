const mongoose = require('mongoose')

const squema = mongoose.Schema({
    clientCode: String,
    productCode: String,
    date: String,
    status: String,
})

const orderModel = mongoose.model('order', squema)

module.exports = {orderModel}