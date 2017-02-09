let express = require('express')
let bodyParser = require('body-parser')
let uuid = require('uuid')
let mongoose = require('mongoose')
let galaxyRoutes = require('./server-assets/routes/galaxy-routes')
let starRoutes = require('./server-assets/routes/star-routes')
const PORT = process.env.PORT || 8080
let server = express()

// DO NOT PUSH TO GITHUB A REAL PRODUCTION CONNECTIONSTRING
const connectionString = 'mongodb://rocketman:123password@ds036789.mlab.com:36789/space'
let connection = mongoose.connection;

mongoose.connect(connectionString, {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
  console.log('THERE WAS A CONNECTION PROBLEM', err)
})

connection.once('open', () => {
  console.log('We are now connected to space')
  server.listen(PORT, () => {
    console.log('YEP its working', 'http://localhost:' + PORT)
  })
})





// THIS DB IS FAKE WE WILL SWITCH IT OUT LATER
let db = {
  galaxies: [],
  stars: [],
  planets: [],
  moons: []
}

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

// ROUTES
server.use(galaxyRoutes)
server.use(starRoutes)