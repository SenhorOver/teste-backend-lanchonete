const {AdmModel} = require('../models/admModel')

async function post(req, res){
    const {id} = req.params

    try{
        const adm = await AdmModel.findById(id)
        res.send(adm)
        // Buscar uma estrutura HTML que vou colocar em uma collection e fazer
        // enviar essa estrutura e por dentro de MAIN no HTML onde terá todo o acesso
        // ADMIN necessário: Listar Produtos, Clientes e pedidos, etc.
    } catch(e){
        res.send(e)
    }
}


module.exports = {
    post,
}