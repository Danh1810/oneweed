const { connect, poolData } = require('../database/index');

const ordersController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await poolData.query('SELECT * FROM OrderTable');
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await poolData.query('SELECT * FROM OrderTable WHERE order_id = ?', [id]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    try {
      // Extract necessary data from the request
      const { product_id, quantity, total_price } = req.body;

      // Assuming OrderTable has columns like product_id, quantity, total_price, etc.
      const sql = 'INSERT INTO OrderTable (product_id, quantity, total_price) VALUES (?, ?, ?)';
      const [rows, fields] = await poolData.query(sql, [product_id, quantity, total_price]);

      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    try {
      const { product_id, quantity, total_price } = req.body;
      const { id } = req.params;

      const sql = 'UPDATE OrderTable SET product_id = ?, quantity = ?, total_price = ? WHERE order_id = ?';
      const [rows, fields] = await poolData.query(sql, [product_id, quantity, total_price, id]);

      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await poolData.query('DELETE FROM OrderTable WHERE order_id = ?', [id]);

      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = ordersController;