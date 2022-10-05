const router = require('express').Router()

const ClientController = require('../controllers/clientController')
const AdmController = require('../controllers/admController')

// Client API
router.get('/client/:id?', ClientController.get)
router.post('/client', ClientController.post)
router.put('/client/:id', ClientController.put)
router.delete('/client/:id', ClientController.del)




// Login
router.post('/adm/:id', AdmController.post)

module.exports = {router}