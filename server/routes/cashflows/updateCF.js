let express = require('express')
let router = express.Router()
const db = require('../../queries')

  
router.put('/investors/invid/:InvID/cf', (request, result, next) => {
    let { row } = request.body
    'UPDATE "tblIDB_Investments_CF" '+
    'SET "InvID" = $1, "CID" = $2, "CFID"= $3 "CF_Amount" = $4 , "CF_Date" = $5 '+
    'WHERE "InvID" = $1, "CID" = $2, "CFID"= $3 "CF_Amount" = $4 , "CF_Date"::date = date $5'
    db.query(updateCF, [row.InvID, row.CFID, row.CFID, row.CF_Amount, row.CF_Date] , (err, res2) => {
    if (err) {
        return next(err)
    }
    result.send("Cashflows Updated")
    })
})
module.exports = router
