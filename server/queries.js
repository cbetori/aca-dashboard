require('dotenv').config('../.env')
const  Pool  = require('pg').Pool

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true
})

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }