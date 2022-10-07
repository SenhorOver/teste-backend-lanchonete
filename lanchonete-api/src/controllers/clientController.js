const {clientModel} = require('../models/clientModel')

async function get(req, res){
    const {id} = req.params
    
    const search = id ? {_id: id} : null

    const client = clientModel.find(search)

    const msg = client ? 'success' : 'error'

    res.send({
        message: msg,
        client
    })
}




module.exports = {
    get,
}