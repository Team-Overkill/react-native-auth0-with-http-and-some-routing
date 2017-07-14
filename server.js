//  »»»»»»»»»»»»»»»»»»»║   REQUIRE MODULES
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
const Auth0Strategy = require('passport-auth0')
const passport = require('passport')
const config = require('./.config')
const testCtrl = require('./controllers/test')

//  »»»»»»»»»»»»»»»»»»»║   OTHER VARIABLES
const port = config.port

//  »»»»»»»»»»»»»»»»»»»║   MIDDLEWARE
const app = express()
app.use(express.static('../public'))
app.use(bodyParser.json())

// .................... database
massive({
  host: config.host
  , port: 5432
  , database: config.database
  , user: config.user
  , password: config.password
}).then(function (db) {
  app.set('db', db),
    console.log('connected to test database')
});

// .................... session setups
app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: config.secret
}))


// .................... get test
app.get('/api/tests', testCtrl.testEndpoint)
app.post('/api/tests', testCtrl.testPost)


//  »»»»»»»»»»»»»»»»»»»║   TESTS
app.listen(port, () => console.log(`listening on port ${port}`))