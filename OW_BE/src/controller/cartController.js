const { poolData } = require('../database/index')

const getCartById = async (req, res) => {
  const id = req.params.id
  const q = 'SELECT * FROM Cart WHERE Cart_id=id '

  try {
    const [rows] = await poolData.execute(q)
    console.log(typeof JSON.parse(rows[0].images))
  } catch (error) {}
}
const getAllCart = async (req, res) => {
  const q = 'SELECT * from Cart'
  try {
    const [rows] = await poolData.execute(q)
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const AddCart =async(req,res)=>{
  try {
    let Product_id=req.body.Product_id
    let total_amount=req.body.total_amount
    let user_id=req.body.user_id
    
    const sql = 'insert into Cart(Product_id,total_amount,User_id) values (?,?,?)'
    const [rows, fields] = await poolData.query(sql, [Product_id,total_amount,user_id])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}

const EditCart = async (req, res) => {
  try {
    let Product_id=req.body.Product_id
    let total_amount=req.body.total_amount
    let user_id=req.body.user_id
    const { id } = req.params.Cart_id
    const sql = 'update Cart set Product_id=?,total_amount=?,User_id=? where Cart_id =?'
    const [rows, fields] = await poolData.query(sql, [Product_id,total_amount,user_id,id])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}
const deleteCart =async(req,res) =>{
  try {
    const { id } = req.params
    const [rows, fields] = await poolData.query(
      'delete from Cart where Cart_id= ?',
      [id]
    )
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}


module.exports = { getCartById,getAllCart,AddCart,EditCart,deleteCart}
