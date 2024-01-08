const { poolData } = require('../database/index')

const getOrderById = async (req, res) => {
  const id = req.params.id
  const q = 'SELECT * FROM Order WHERE Order_id = id '

  try {
    const [rows] = await poolData.execute(q)
    console.log(typeof JSON.parse(rows[0].images))
  } catch (error) {}
}
const getAllOrder = async (req, res) => {
  const q = 'SELECT * from Order'
  try {
    const [rows] = await poolData.execute(q)
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}


const CreateOrder =async(req,res)=>{
  try {
    const Orderdate = req.body.date
    let total=req.body.total
    let user_id=req.body.used_id
   
    const sql = 'insert into Product(Order_date,total_amount,User_id) values (?,?,?)'
    const [rows, fields] = await poolData.query(sql, [Orderdate,total,user_id])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}

const EditOrder = async (req, res) => {
  try {
    const Orderdate = req.body.date
    let total=req.body.total
    let user_id=req.body.used_id
    const { id } = req.params.Order_id
    const sql = 'update Product set Order_date = ?,total_amount =?,User_id=?'
    const [rows, fields] = await poolData.query(sql, [Orderdate,total,user_id, id])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}
const deleteOrder =async(req,res) =>{
  try {
    const { id } = req.params
    const [rows, fields] = await poolData.query(
      'delete from Product where Order_id= ?',
      [id]
    )
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}
// const getOrderByUserid =async(req,res) =>{
// const user_id = req.params.User_id
//   const q = 'SELECT * FROM Order WHERE User_id=user_id '

//   try {
//     const [rows] = await poolData.execute(q)
//     console.log(typeof JSON.parse(rows[0].images))
//   } catch (error) {}
// }



module.exports = { getOrderById, getAllOrder,CreateOrder,EditOrder,deleteOrder}
