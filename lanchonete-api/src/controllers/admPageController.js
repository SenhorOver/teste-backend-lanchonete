const {admPageModel} = require('../models/admPageModel')

async function post(req, res){
    const {name, id} = req.body

    

    res.send('NADA')
}

module.exports = {post}