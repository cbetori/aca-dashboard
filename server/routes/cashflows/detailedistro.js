// let express = require('express')
// let router = express.Router()
// const db = require('../../queries')

// // 'crosstab SUM("tblIDB_Investments_CF"."CF_Amount") AS SumOfCF_Amount '+
// // 'PIVOT ["tblIDB_Investments_CF"].["CF_Date"]& " - " & ["tblIDB_Investments_CF"_IDs].["Code_Name"]'
// // THIS PULLS SOMETHING = 'SELECT "tblIDB_Investors"."Account_Name", "tblIDB_Investors"."SID", "tblIDB_Investments"."InvID", "tblIDB_Investments"."CID", "tblIDB_Investments"."Feeder", "tblIDB_Investments"."Gross_Capital" as Gross_Capital, "tblIDB_Investments"."Date_Inv" as Date_Inv,"tblIDB_Investments"."Date_Eliminate" as Date_Eliminate '+
// // 'FROM ("tblIDB_Investments_CF_IDs" INNER JOIN (("tblIDB_Investments" INNER JOIN "tblIDB_Investors" ON "tblIDB_Investments"."VID" = "tblIDB_Investors"."VID") '+ 
// // 'INNER JOIN "tblIDB_Investments_CF" ON ("tblIDB_Investments"."InvID" = "tblIDB_Investments_CF"."InvID") ' +
// // 'AND ("tblIDB_Investments"."CID" = "tblIDB_Investments_CF"."CID")) ON "tblIDB_Investments_CF_IDs"."CFID" = "tblIDB_Investments_CF"."CFID") INNER JOIN "tblIDB_Funds" ON "tblIDB_Investments"."Feeder" = "tblIDB_Funds"."Feeder" ' +
// // 'WHERE ((("tblIDB_Investments_CF"."Scenario")=\'Actual\') AND (( "tblIDB_Investments_CF_IDs"."Code_Type" = \'Distro\'))) ' +
// // 'GROUP BY "tblIDB_Investors"."Account_Name", "tblIDB_Investors"."SID", "tblIDB_Investments"."InvID", "tblIDB_Investments"."CID", "tblIDB_Investments"."Feeder", "tblIDB_Investments"."Gross_Capital", "tblIDB_Investments"."Date_Inv", "tblIDB_Investments"."Date_Eliminate" '
// let string = 'SELECT "tblIDB_Investors"."Account_Name", "tblIDB_Investors"."SID", "tblIDB_Investments"."InvID", "tblIDB_Investments"."CID", "tblIDB_Investments"."Feeder", "tblIDB_Investments"."Gross_Capital" as Gross_Capital, "tblIDB_Investments"."Date_Inv" as Date_Inv,"tblIDB_Investments"."Date_Eliminate" as Date_Eliminate, "tblIDB_Investments_CF"."CF_Amount", "tblIDB_Investments_CF"."CFID" '+
// 'FROM ("tblIDB_Investments_CF_IDs" INNER JOIN (("tblIDB_Investments" INNER JOIN "tblIDB_Investors" ON "tblIDB_Investments"."VID" = "tblIDB_Investors"."VID") '+ 
// 'INNER JOIN "tblIDB_Investments_CF" ON ("tblIDB_Investments"."InvID" = "tblIDB_Investments_CF"."InvID") ' +
// 'AND ("tblIDB_Investments"."CID" = "tblIDB_Investments_CF"."CID")) ON "tblIDB_Investments_CF_IDs"."CFID" = "tblIDB_Investments_CF"."CFID") INNER JOIN "tblIDB_Funds" ON "tblIDB_Investments"."Feeder" = "tblIDB_Funds"."Feeder" ' +
// 'WHERE ((("tblIDB_Investments_CF"."Scenario")=\'Actual\') AND (( "tblIDB_Investments_CF_IDs"."Code_Type" = \'Distro\'))) ' +
// 'GROUP BY "tblIDB_Investors"."Account_Name", "tblIDB_Investors"."SID", "tblIDB_Investments"."InvID", "tblIDB_Investments"."CID", "tblIDB_Investments"."Feeder", "tblIDB_Investments"."Gross_Capital", "tblIDB_Investments"."Date_Inv", "tblIDB_Investments"."Date_Eliminate", "tblIDB_Investments_CF"."CF_Amount",  "tblIDB_Investments_CF"."CFID" '

// let test = 'SELECT *FROM'+ '
// crosstab(select "tblIDB_Investments"."CID", "tblIDB_Investments_CF"."CFID", value from ct where attribute = att2 or attribute = att3order by 1,2)'+
// 'AS ct( "tblIDB_Investments"."CID", category_1, category_2 text, category_3);'

// // let string2 = CROSSTAB(string)

// router.get('/cashflows/distributionsdetail', (request, result, next) => {
//     db.query(string,null , (err, res) => { 
//       if (err) {
//         return next(err)
//       }
//       result.send(res.rows)
//     })
//   })

//   module.exports = router