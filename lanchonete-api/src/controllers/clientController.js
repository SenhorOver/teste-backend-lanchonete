const {ClientModel} = require('../models/clientModel')

async function get(req, res){
    const {id} = req.params

    const find = id ? {_id: id} : null

    const clients = await ClientModel.find(find)

    const msg = clients ? 'success' : 'error'

    res.send({
        message: msg,
        clients,
    })
}

function post(req, res){
    const {
        name,
        email,
        phone,
        address
    } = req.body

    const register = new ClientModel({
        name,
        email,
        phone,
        address,
    })

    register.save()

    res.send({
        message: 'success',
    })
}

async function put(req, res){
    const {id} = req.params

    const clientEdited = await ClientModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        clientEdited,
    })
}

async function del(req, res){
    const {id} = req.params

    const deleted = await ClientModel.deleteOne({_id: id})

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