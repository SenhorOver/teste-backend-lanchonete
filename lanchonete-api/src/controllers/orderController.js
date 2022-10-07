const {orderModel} = require('../models/orderModel')

async function get(req, res){
    const {id} = req.params
    const search = id ? {clientCode: id} : null
    let msg = 'success'
    let order;
    try{
        order = await orderModel.find(search)

    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
            order,
        })
    }
}

async function post(req, res){
    const {idC} = req.params
    const {date, status, idP} = req.body 
    let productCode = ''
    
    if(Array.isArray(idP)){
        idP.forEach((vl, ix) => {
            if(ix !== idP.length - 1){
                return productCode += `${vl}-` 
            }
            return productCode += `${vl}` 
        })
    } else{
        productCode = idP
    }

    let msg = 'success'
    try{
        const order = new orderModel({
            clientCode: idC,
            productCode,
            date,
            status
        })
    
        await order.save()
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
    let order
    try{
        order = await orderModel.findByIdAndUpdate(id, req.body, {new: true})
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
            order,
        })
    }
}

async function del(req, res){
    const {id} = req.params
    let msg = 'success'
    let deleted
    try{
        deleted = await orderModel.deleteOne({_id: id})
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
        })
    }
}

module.exports = {
    get,
    post,
    put,
    del
}