const app = require('./app')
const connectDB = require('./config/DataBase')

// app.get('/', (req, res) => {
//     res.send("hello guys")
// })


// app.get('/ayoub', (req, res) => {
//     res.send('ayoub page!')
// })
connectDB()


app.listen(5000, () => {
    console.log("server running in port 5000")
}
)

