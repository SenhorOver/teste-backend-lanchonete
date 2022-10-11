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

async function getLogin(req, res){
    // Pegar email e ID para fazer o login, e após isso retornar os dados dos pedidos desse client (Buscar com o model de pedidos pelo ID desse usuário)
    // Fazer no front a capacidade de fazer pedidos, utilizando o controller de orderController
    res.send('NADA')
}

module.exports = {
    get,
    post,
    put,
    del,
    getLogin
}