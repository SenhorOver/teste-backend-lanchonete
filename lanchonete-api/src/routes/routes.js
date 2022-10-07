const router = require('express').Router()

const clientController = require('../controllers/clientController')

router.get('/client/:id?', clientController.get)



module.exports = {router}