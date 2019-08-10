let express = require('express')
let router = express.Router()
const db = require('../../queries')

router.get('/api/investors', (request, result, next) => {
    const query = 
    'SELECT "tblIDB_Investments"."InvID", "tblIDB_Investments"."VID", "tblIDB_Investments"."CID", "tblIDB_Investors"."SID", '+
    '"tblIDB_Investments"."Feeder", "tblIDB_Investments"."Inv_Type" ,  "tblIDB_Investments"."Date_Inv",'+
    '"tblIDB_Investments"."Date_Eliminate", "tblIDB_Investors"."Account_Name", '+
    '"tblIDB_Investments"."Gross_Capital", "tblIDB_Investments"."Net_Capital"'+
    'FROM "tblIDB_Investments" '+
    'INNER JOIN "tblIDB_Investors"'+
    'ON  "tblIDB_Investments"."VID" = "tblIDB_Investors"."VID"'
    db.query(query, null , (err, res) => {
      if (err) {
        return next(err)
      }
      result.send(res.rows)
    })
  })

  module.exports = router