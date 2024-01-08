const express = require('express')
const {
  getOrderById,getAllOrder,CreateOrder,EditOrder,deleteOrder,getOrderByUserid
} = require('../controller/OderController')

const router = express.Router()

router.get('/Orderad', getAllOrder)
router.post('/creteOrder',CreateOrder)
router.post('/editOrder',EditOrder)
router.post('/deleteOrder',deleteOrder)
// router.get('/Or',getOrderByUserid)


module.exports = router ;
