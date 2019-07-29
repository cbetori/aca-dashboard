let express = require('express')
let router = express.Router()
const db = require('../../queries')

router.get('/cashflows/distributions', (request, result, next) => {
    db.query('SELECT "tblIDB_Investments_CF"."InvID","tblIDB_Investments_CF"."CID", "tblIDB_Investments_CF"."Scenario", "tblIDB_Investments_CF"."CFID"'+
    ', "tblIDB_Investments_CF_IDs"."Code_Name", "tblIDB_Investments_CF"."CF_Date", "tblIDB_Investments_CF"."CF_Amount", "tblIDB_Investments_CF"."Time_Stamp" '+ 
    'FROM "tblIDB_Investments_CF" ' +
    'INNER JOIN  "tblIDB_Investments_CF_IDs" on  "tblIDB_Investments_CF"."CFID" = "tblIDB_Investments_CF_IDs"."CFID" ' +
    'WHERE  "tblIDB_Investments_CF_IDs"."Code_Type" = \'Distro\' AND  "tblIDB_Investments_CF"."Scenario" = \'Actual\'',
     null , (err, res) => { 
      if (err) {
        return next(err)
      }
      result.send(res.rows)
    })
  })

  module.exports = router