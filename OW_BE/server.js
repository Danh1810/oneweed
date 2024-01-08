const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())

const { connect } = require('./src/database/index')
const userRouter  = require('./src/routes/user')
const  productRouter = require('./src/routes/product')
const categoryRouter =require('./src/routes/categoriesRoutes')
const orderRoute = require('./src/routes/orderRoute')
const Cartroute=require('./src/routes/CartRoter')
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))



app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/',categoryRouter)

app.use('/Order',orderRoute)
app.use('/Cart',Cartroute)


connect()

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`)
})
