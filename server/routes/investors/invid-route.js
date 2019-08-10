let express = require('express')
let router = express.Router()
const db = require('../../queries')
  
router.get('/api/investors/invid/:InvID', (request, result, next) => {

  const query = 
    'SELECT "InvID", "tblIDB_Investments"."VID", "CID", "Feeder", "Inv_Type", "Date_Inv", "Date_Eliminate", '+ 
    '"Gross_Capital", "Net_Capital","tblIDB_Investors"."Account_Name"'+  
    'FROM "tblIDB_Investments" '+
    'INNER JOIN "tblIDB_Investors" '+
    'ON "tblIDB_Investors"."VID" = "tblIDB_Investments"."VID" '+
    'WHERE "InvID" ='+request.params.InvID

  const query2 = 
    'SELECT "tblIDB_Investments_CF"."InvID","tblIDB_Investments_CF"."CID", "tblIDB_Investments_CF"."Scenario", "tblIDB_Investments_CF"."CFID",'+
    '"tblIDB_Investments_CF_IDs"."Code_Name", "tblIDB_Investments_CF"."CF_Date", "tblIDB_Investments_CF"."CF_Amount", "tblIDB_Investments_CF"."Time_Stamp" '+ 
    'FROM "tblIDB_Investments_CF" ' +
    'INNER JOIN  "tblIDB_Investments_CF_IDs" on  "tblIDB_Investments_CF"."CFID" = "tblIDB_Investments_CF_IDs"."CFID" ' +
    'WHERE "tblIDB_Investments_CF"."Scenario" = \'Actual\' AND "tblIDB_Investments_CF"."InvID"='+request.params.InvID
    
  db.query(query, null , (err, res) => {
    db.query(query2, null , (err, res2) => {
      if (err) {
        return next(err)
      }
      let invObj = [{details: res.rows, cashflows: res2.rows}]
      result.send(invObj)
    })
  })
})

//   router.get('/investors/vid/:VID/cashflows', (request, result, next) => {
//     db.query('SELECT "tblIDB_Investments", "tblIDB_Investments_CF"."InvID","tblIDB_Investments_CF"."CID", "tblIDB_Investments_CF"."Scenario", "tblIDB_Investments_CF"."CFID"'+
//     ', "tblIDB_Investments_CF_IDs"."Code_Name", "tblIDB_Investments_CF"."CF_Date", "tblIDB_Investments_CF"."CF_Amount", "tblIDB_Investments_CF"."Time_Stamp" '+ 
//     'FROM "tblIDB_Investments_CF" ' +
//     'INNER JOIN  "tblIDB_Investments_CF_IDs" on  "tblIDB_Investments_CF"."CFID" = "tblIDB_Investments_CF_IDs"."CFID" ' +
//     'WHERE "tblIDB_Investments_CF"."Scenario" = \'Actual\'',
//      null , (err, res) => { 
//       if (err) {
//         return next(err)
//       }
//       result.send(res.rows)
//     })
//   })

  module.exports = router