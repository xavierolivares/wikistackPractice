const express = require('express')
const router = express.Router()
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')

router.get('/', (req,res,next) => {
    res.send('got to /wiki')
})

router.post('/', (req,res,next) => {
    res.send('got to /wiki')
})

router.get('/add', (req,res,next) => {
    res.send(addPage())
})

module.exports = router