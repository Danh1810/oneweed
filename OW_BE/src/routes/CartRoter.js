const express = require('express')
const {

    getCartById,getAllCart,AddCart,EditCart,deleteCart
} = require('../controller/cartController')

const router = express.Router()

router.get('/', getAllCart)
router.post('/addCart',AddCart)
router.post('/editCart',EditCart)
router.post('/deleteCart',deleteCart)
module.exports =  router ;
