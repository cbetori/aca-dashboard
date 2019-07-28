const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001

//Routes
const fundsRoute = require('./routes/funds-route')
const fundsSizeRoute = require('./routes/fundsSize-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../client/public'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Deploy routes
app.use(fundsRoute, fundsSizeRoute)

app.listen(port, ()=>{
    console.log('App running on '+port)
})
