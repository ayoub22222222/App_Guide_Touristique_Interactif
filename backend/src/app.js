const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const userRouter = require('./routes/user.route')
const countryRoutes = require('./routes/country.routes')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(
    helmet({
        crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
)

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
})

app.use('/images', (req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    next()
})
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))
// app.use("/images", express.static(path.join(__dirname, "../public/images")));
app.use('/users', apiLimiter, userRouter)
app.use('/api', apiLimiter, countryRoutes)


module.exports = app
