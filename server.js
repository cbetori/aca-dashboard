const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const path = require('path')
//Routes
const fundsRoute = require('./server/routes/funds/funds-route')
const fundsSizeRoute = require('./server/routes/funds/fundsSize-route')
const investorsRoute = require('./server/routes/investors/investors-route')
const invIDRoute = require('./server/routes/investors/invid-route')
const investmentsRoute = require('./server/routes/investments/investments-route')
const distributionsRoute = require('./server/routes/cashflows/distributions')
const updateCF = require('./server/routes/cashflows/updateCF')
//const distributionsDetailRoute = require('./routes/cashflows/detailedistro')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
 
app.use(fundsRoute, fundsSizeRoute,investmentsRoute, distributionsRoute, investorsRoute, invIDRoute, updateCF)
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname,'./client/build')));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + './client/build/index.html'));
  });
}else{
    app.use(express.static('./client/build'))
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

router.get('/api/funds', (request, result, next) => {
  db.query('SELECT * FROM "tblIDB_Funds"', null , (err, res) => {
    if (err) {
      return next(err)
    }
    result.send(res.rows)
  })
})
//Deploy routes


app.listen(process.env.PORT || 3001, ()=>{
    console.log('App running on '+port)
})
