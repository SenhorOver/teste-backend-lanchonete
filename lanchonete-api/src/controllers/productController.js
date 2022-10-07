const {productModel} = require('../models/productModel')

async function get(req, res){
    const {id} = req.params
    const search = id ? {_id: id} : null
    let msg = 'success'
    let product
    try{
        product = await productModel.find(search)
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
            product,
        })
    }
}

async function post(req, res){
    let product;
    let msg = 'success'
    try{
        product = new productModel(req.body)

        await product.save()
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg
        })
    }
}

async function put(req, res){
    const {id} = req.params
    let msg = 'success'
    let updated
    try{
        updated = await productModel.findOneAndUpdate({_id: id}, req.body, {new: true})
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
            updated
        })
    }
}


async function del(req, res){
    const {id} = req.params
    let deleted;
    let msg = 'success'
    try{
        deleted = await productModel.deleteOne({_id: id})
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg
        })
    }
}


module.exports = {
    get,
    post,
    put,
    del
}