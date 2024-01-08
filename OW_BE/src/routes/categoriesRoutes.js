const express = require('express')
const categoryRouter = express.Router()
const categoriesController = require('../controller/categoriesController')
const upLoad = require('../middleware/cloudinary')

categoryRouter.get('/categories', categoriesController.getAll)
categoryRouter.get('/categories/:id', categoriesController.getById)
categoryRouter.post(
  '/categories/create',
  upLoad.single('img'),
  categoriesController.create
)
categoryRouter.put('/categories/update/:id', categoriesController.update)
categoryRouter.delete('/categories/:id', categoriesController.delete)

categoryRouter.get('/subcategory/:id', categoriesController.getSubCategory)
module.exports = categoryRouter;
