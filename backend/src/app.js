const express = require('express')
const app = express()
const userRouter = require('./routes/user.route')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())
app.use('/users', userRouter)


module.exports = app