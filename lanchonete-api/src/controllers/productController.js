const {productModel} = require('../models/productModel')

async function get(req, res){
    const {id} = req.params
    const search = id ? {_id: id} : null

    const product = await productModel.find(search)

    const msg = product ? 'success' : 'error'

    res.send({
        message: msg,
        product,
    })
}

async function post(req, res){
    const product = new productModel(req.body)

    await product.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const {id} = req.params

    const updated = await productModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    const msg = updated ? 'success' : 'error'

    res.send({
        message: msg,
        updated
    })
}

async function del(req, res){
    const {id} = req.params

    const deleted = await productModel.deleteOne({_id: id})

    const msg = deleted.acknowledged ? 'success' : 'error'

    res.send({
        message: msg
    })
}


module.exports = {
    get,
    post,
    put,
    del
}