const { Sequelize } = require('sequelize')
const mysql2 = require('mysql2')
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('oneweedshop', 'root', '123456', {
  host: '127.0.0.1',
  port: '3307',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true,
  },
  logging: false,
})

const pool = mysql2.createPool({
  host: '127.0.0.1',
  user: 'root',
  port:"3307",
  password: '123456',
  database: 'oneweedshop',
})

const poolData = pool.promise()

let connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = { connect, poolData }
