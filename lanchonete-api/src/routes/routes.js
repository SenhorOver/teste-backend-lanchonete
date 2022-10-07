const router = require('express').Router()

const clientController = require('../controllers/clientController')


//Client CRUD
router.get('/client/:id?', clientController.get)
router.post('/client', clientController.post)
router.put('/client/:id', clientController.put)
router.delete('/client/:id', clientController.del)


//Product CRUD



module.exports = {router}