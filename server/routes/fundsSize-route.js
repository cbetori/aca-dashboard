let express = require('express')
let router = express.Router()
const db = require('../queries')

router.get('/funds-size', (request, result, next) => {
    db.query('SELECT "tblIDB_Funds"."Fund_ID", Sum("tblIDB_Investments"."Gross_Capital") AS Sum_of_Gross_Capital '+
    'FROM "tblIDB_Funds" INNER JOIN "tblIDB_Investments" ON "tblIDB_Funds"."Feeder" = "tblIDB_Investments"."Feeder" '+
    'GROUP BY "tblIDB_Funds"."Fund_ID"', null , (err, res) => {
      if (err) {
        return next(err)
      }
      result.send(res.rows)
    })
  })
  
  module.exports = router