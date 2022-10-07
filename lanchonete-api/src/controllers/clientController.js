const {clientModel} = require('../models/clientModel')

async function get(req, res){
    const {id} = req.params
    
    const search = id ? {_id: id} : null
    
    let client;

    let msg = 'success'
    try{
        client = await clientModel.find(search)

    } catch(e){
        msg = 'error'
    }finally{
        res.send({
            message: msg,
            client
        })
    }
}

async function post(req, res){
    let msg = 'success'

    let register;

    try{
        register = new clientModel(req.body)

        await register.save()
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
        updated = await clientModel.findOneAndUpdate({_id: id}, req.body, {new: true})
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
            updated,
        })
    }
}

async function del(req, res){
    const {id} = req.params
    let msg = 'success'
    let removed
    try{
        removed = await clientModel.deleteOne({_id: id})
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