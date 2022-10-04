const mongoose = require('mongoose')

const squema = mongoose.Schema({
    name: String,
    price: Number,
})


const ProductModel = mongoose.model('products', squema)

module.exports = {ProductModel}