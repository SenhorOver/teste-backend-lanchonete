const mongoose = require('mongoose')

const squema = mongoose.Schema({
    name: String,
})

const AdmModel = mongoose.model('administrator', squema)

module.exports = {AdmModel}