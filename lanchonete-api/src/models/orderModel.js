const mongoose = require('mongoose')

const squema = mongoose.Schema({
    clientCode: Number,
    productCode: Number,
    data: String,
    status: String,
})


const OrderModel = mongoose.model('orders', squema)

module.exports = {OrderModel}