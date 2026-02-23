const express = require('express')
const app = express()
const path = require("path");
const userRouter = require('./routes/user.route')
const morgan = require('morgan')
const cors = require('cors')
const countryRoutes = require("./routes/country.routes");

app.use(cors())
app.use(express.json())

app.use(morgan('dev'))

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/users', userRouter)
app.use("/api", countryRoutes);


module.exports = app