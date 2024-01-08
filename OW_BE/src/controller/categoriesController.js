const { connect, poolData } = require('../database/index')

const categoriesController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await poolData.query('select * from Category')
      res.json({
        data: rows,
      })
    } catch (error) {
      console.log(error)
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params
      const [rows, fields] = await poolData.query(
        'select * from Category where Category_id = ?',
        [id]
      )
      res.json({
        data: rows,
      })
    } catch (error) {
      console.log(error)
    }
  },
  create: async (req, res) => {
    try {
      const data = req.file
      const image = data.path
      const name = req.body.name
      const sql = 'insert into Category (name, image) values (?, ?)'
      const [rows, fields] = await poolData.query(sql, [name, image])
      res.json({
        data: rows,
      })
    } catch (error) {
      console.log(error)
    }
  },
  update: async (req, res) => {
    try {
      const { name, image } = req.body
      const { id } = req.params
      const sql = 'update Category set name = ? where Category_id = ?'
      const [rows, fields] = await poolData.query(sql, [name, image, id])
      res.json({
        data: rows,
      })
    } catch (error) {
      console.log(error)
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const [rows, fields] = await poolData.query(
        'delete from Category where Category_id = ?',
        [id]
      )
      res.json({
        data: rows,
      })
    } catch (error) {
      console.log(error)
    }
  },

  getSubCategory: async (req, res) => {
    const q = 'SELECT * FROM subcategory WHERE Category_id=?'
    try {
      const { id } = req.params
      const [rows] = await poolData.query(q, [id])
      res.status(200).json(rows)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },
}
module.exports = categoriesController
