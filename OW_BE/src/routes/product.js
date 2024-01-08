const express = require('express')
const {

  getProductById, getAllProduct, getProductBySubCategory,CreateProduct,EditProduct,deleteProduct
} = require('../controller/productController')

const router = express.Router()

router.get('/', getAllProduct)
router.get('/subcategory/:id', getProductBySubCategory)
router.post('/creteProduct',CreateProduct)
router.post('/editProduct',EditProduct)
router.post('/deleteProduct',deleteProduct)


module.exports =  router ;
