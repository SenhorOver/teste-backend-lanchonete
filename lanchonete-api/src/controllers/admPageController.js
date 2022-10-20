const {admPageModel} = require('../models/admPageModel')

async function post(req, res){
    let {name, id} = req.body
    let msg = 'success'
    let page;
    try{
        // if(!name || !id) throw new Error('deu erro')
        page = await admPageModel.findById(id)
    } catch(e){
        msg = 'error'
    } finally{
        res.send({
            message: msg,
            page
        })
    }
}

module.exports = {post}