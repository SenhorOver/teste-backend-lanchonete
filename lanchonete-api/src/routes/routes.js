const router = require('express').Router()

const clientController = require('../controllers/clientController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')
const admPageController = require('../controllers/admPageController')


//Client CRUD
router.get('/client/:id?', clientController.get)
router.post('/client/', clientController.post)
router.put('/client/:id', clientController.put)
router.delete('/client/:id', clientController.del)
    //Client Login
router.get('/clientLogin/:id/:email', clientController.getLogin)


//Product CRUD
router.get('/product/:id?', productController.get)
router.post('/product/', productController.post)
router.put('/product/:id', productController.put)
router.delete('/product/:id', productController.del)

//Orders CRUD
router.get('/order/:id?', orderController.get) // ID do client que fez o pedido
router.post('/order/:idC', orderController.post) //Enviar o ID do client e do(s) produto(s) selecionado(s)
router.put('/order/:id', orderController.put) //Enviar ID do próprio pedido
router.delete('/order/:id', orderController.del) //Id do próprio pedido

//Send ADM Page
router.get('/admPage/:id/:name', admPageController.get)

module.exports = {router}