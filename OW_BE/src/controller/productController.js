const { poolData } = require('../database/index')

const getProductById = async (req, res) => {
  const productid = req.params.id
  const q = 'SELECT * FROM product WHERE Product_Id =productid '

  try {
    const [rows] = await poolData.execute(q)
    console.log(typeof JSON.parse(rows[0].images))
  } catch (error) {}
}
const getAllProduct = async (req, res) => {
  const q = 'SELECT * from product'
  try {
    const [rows] = await poolData.execute(q)
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const getProductBySubCategory = async (req, res) => {
  const q = 'SELECT * FROM product WHERE SubCategory_id=?'
  const id = req.params?.id

  try {
    const [rows] = await poolData.execute(q, [id])
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
const CreateProduct =async(req,res)=>{
  try {
    const name = req.body.name
    let description=req.body.description
    let price=req.body.price
    let stock_quantity=req.body.stock_quantity
    let SubCategory_id=req.body.SubCategory_id
    let Store_id=req.body.Store_id
    let color=req.body.color
    let size=req.body.size
    let image=req.body.image
    const sql = 'insert into Product(name,description,price,stock_quantity,SubCategory_id,Store_id,color,size, image) values (?,?,?,?,?,?,?,?,?)'
    const [rows, fields] = await poolData.query(sql, [name,description,price,stock_quantity,SubCategory_id,Store_id,color,size, image])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}

const EditProduct = async (req, res) => {
  try {
    let name=req.body.product_name
    let description=req.body.description
    let price=req.body.price
    let stock_quantity=req.body.stock_quantity
    let SubCategory_id=req.body.SubCategory_id
    let Store_id=req.body.Store_id
    let color=req.body.color
    let size=req.body.size
    let image=req.body.image
    const { id } = req.params.Product_id
    const sql = 'update Product set name = ?,description =?,price=?,stock_quantity=?,SubCategory_id=?,Store_id=?,color=?,size=?,image=? where Product_id = ?'
    const [rows, fields] = await poolData.query(sql, [name,description,price,stock_quantity,SubCategory_id,Store_id,color,size, image, id])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}
const deleteProduct =async(req,res) =>{
  try {
    const { id } = req.params
    const [rows, fields] = await poolData.query(
      'delete from Product where Product_id= ?',
      [id]
    )
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}


module.exports = { getProductById, getAllProduct, getProductBySubCategory,CreateProduct,EditProduct,deleteProduct }
