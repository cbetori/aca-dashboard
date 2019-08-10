let express = require('express')
let router = express.Router()
const db = require('../../queries')

router.get('/api/funds', (request, result, next) => {
    db.query('SELECT * FROM "tblIDB_Funds"', null , (err, res) => {
      if (err) {
        return next(err)
      }
      result.send(res.rows)
    })
  })

module.exports = router