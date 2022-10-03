const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Enviei uma resposta')
})

module.exports = {router}