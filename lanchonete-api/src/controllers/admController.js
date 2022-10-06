const {AdmModel} = require('../models/admModel')
const {AdmPageModel} = require('../models/admPageModel')

async function post(req, res){
    const {id} = req.params

    try{
        const adm = await AdmModel.findById(id)
        
        if(adm){
            //TODO: Fazer model para receber HTML da página e enviar para a página
            const html = await AdmPageModel.find()
            console.log(html)
            res.send({
                html
            })
        }
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