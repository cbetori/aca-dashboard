require('dotenv').config('../.env')
const  Client  = require('pg').Pool

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

module.exports = {
    query: (text, params, callback) => {
      return client.query(text, params, callback)
    },
  }