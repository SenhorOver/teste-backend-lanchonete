const mongoose = require('mongoose')

const squema = mongoose.Schema({
    admPage: String,
})


const AdmPageModel = mongoose.model('adm_pages', squema)

module.exports = {AdmPageModel}