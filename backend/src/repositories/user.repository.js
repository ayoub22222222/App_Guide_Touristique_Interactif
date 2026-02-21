const User = require('../models/user.models')



const createUser = (data) => {
    return User.create(data)
}


const getAllUsers = () => {
    return User.find()
}



module.exports = { createUser, getAllUsers }