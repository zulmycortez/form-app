const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const accountRouter = require('./routes/account-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', accountRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))