const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { poolData } = require('../database/index')

const register = async (req, res) => {
  const q = 'SELECT * FROM user WHERE email=? OR full_name=?'
  const { id, username, imageUrl, emailAddress, role_id } = req.body

  console.log(emailAddress)
  try {
    const [rows] = await poolData.execute(q, [
      emailAddress.trim(),
      username.trim(),
    ])

    if (rows.length) {
      res.status(200).json('Sub')
    } else {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash('12345678', salt)

      const insertQuery =
        'INSERT INTO user(User_id, full_name, avatar, email, password, Role_id) VALUES (?, ?, ?, ?, ?, ?)'
      const insertValues = [
        id,
        username,
        imageUrl,
        emailAddress,
        hashedPassword,
        role_id,
      ]

      await poolData.execute(insertQuery, insertValues)

      res.status(200).json('User created successfully')
    }
  } catch (error) {
    res.status(500).json(error.message || 'Internal Server Error')
  }
}

const login = async (req, res) => {
  const q = 'SELECT * FROM user WHERE email=?'
  const email = req.body?.email

  try {
    const [rows] = await poolData.execute(q, [email.trim()])

    console.log(rows)

    if (rows.length === 0) {
      return res.status(409).json('User not found')
    }

    const isPassword = bcrypt.compareSync(req.body?.password, rows[0].Password)

    if (!isPassword) {
      return res.status(409).json('Wrong password')
    }

    const token = jwt.sign(
      { id: rows[0].User_id, email: rows[0].email },
      'jwtkey'
    )

    const { password, ...other } = rows[0]

    return res.status(200).json({
      ...other,
      accessToken: token,
    })
  } catch (error) {
    return res.status(500).json(error.message || 'Internal Server Error')
  }
}

module.exports = { register, login }
