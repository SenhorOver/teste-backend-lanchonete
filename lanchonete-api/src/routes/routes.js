const router = require('express').Router()

const clientController = require('../controllers/clientController')
const productController = require('../controllers/productController')


//Client CRUD
router.get('/client/:id?', clientController.get)
router.post('/client', clientController.post)
router.put('/client/:id', clientController.put)
router.delete('/client/:id', clientController.del)


//Product CRUD
router.get('/product/:id?', productController.get)
router.post('/product/', productController.post)
router.put('/product/:id', productController.put)
router.delete('/product/:id', productController.del)



module.exports = {router}