const mongoose = require('mongoose')

const squema = mongoose.Schema({
    html: String,
})

const admPageModel = mongoose.model('admPage', squema)

module.exports = {admPageModel}