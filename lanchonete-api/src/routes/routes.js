const router = require('express').Router()

const ClientController = require('../controllers/clientController')

router.get('/client/:id?', ClientController.get)
router.post('/client', ClientController.post)
router.put('/client/:id', ClientController.put)
router.delete('/client/:id', ClientController.del)

module.exports = {router}