const {admPageModel} = require('../models/admPageModel')

async function post(req, res){
    const {name, id} = req.body
    let msg = 'success'
    let page;
    try{
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