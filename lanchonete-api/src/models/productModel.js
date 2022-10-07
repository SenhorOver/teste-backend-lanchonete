const mongoose = require('mongoose')

const squema = mongoose.Schema({
    name: String,
    price: Number
})

const productModel = mongoose.model('product', squema)

module.exports = {productModel}