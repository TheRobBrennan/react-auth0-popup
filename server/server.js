const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('../api/routes')
const morgan = require('morgan')

const PORT = process.env.PORT

// Setup the app
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Use our routes
app.use('/', routes)

// Start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
