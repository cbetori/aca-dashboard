const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

//Routes
const fundsRoute = require('./routes/funds/funds-route')
const fundsSizeRoute = require('./routes/funds/fundsSize-route')
const investmentsRoute = require('./routes/investments/investments-route')
const distributionsRoute = require('./routes/cashflows/distributions')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname,'/../client/build')));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  });
}else{
    app.use(express.static('../client/public'))
}



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Deploy routes
app.use(fundsRoute, fundsSizeRoute,investmentsRoute, distributionsRoute)

app.listen(port, ()=>{
    console.log('App running on '+port)
})
