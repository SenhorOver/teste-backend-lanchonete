const {clientModel} = require('../models/clientModel')

async function get(req, res){
    const {id} = req.params
    
    const search = id ? {_id: id} : null

    const client = await clientModel.find(search)

    const msg = client ? 'success' : 'error'

    res.send({
        message: msg,
        client
    })
}

async function post(req, res){
    const register = new clientModel(req.body)

    await register.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const {id} = req.params
    const updated = await clientModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    const msg = updated ? 'success' : 'error'

    res.send({
        message: msg,
        updated,
    })
}

async function del(req, res){
    const {id} = req.params
    const removed = await clientModel.deleteOne({_id: id})

    const msg = removed.acknowledged ? 'success' : 'error'

    res.send({
        message: msg,
    })
}

module.exports = {
    get,
    post,
    put,
    del
}