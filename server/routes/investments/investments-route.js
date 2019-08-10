let express = require('express')
let router = express.Router()
const db = require('../../queries')

router.get('/api/investments', (request, result, next) => {
    db.query('SELECT * FROM "tblIDB_Investments"', null , (err, res) => {
      if (err) {
        return next(err)
      }
      result.send(res.rows)
    })
  })

  module.exports = router