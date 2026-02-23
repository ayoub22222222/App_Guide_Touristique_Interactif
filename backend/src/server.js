const app = require('./app')
const connectDB = require('./config/DataBase')


connectDB()


app.listen(5000, () => {
    console.log("server running in port 5000")
}
)

