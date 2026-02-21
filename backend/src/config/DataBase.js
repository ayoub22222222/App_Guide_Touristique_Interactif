const mongoose = require('mongoose')


const connectDataBase = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb")
    console.log("connected to mongodb")

}


module.exports = connectDataBase