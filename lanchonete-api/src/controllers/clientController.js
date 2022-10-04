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

async function post(req, res){
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




module.exports = {
    get,
    post,
    // put,
    // del
}