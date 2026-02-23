const mongoose = require('mongoose')


const connectDataBase = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
        serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    })
    console.log("connected to mongodb")

}


module.exports = connectDataBase