const User = require('../models/user.models')

const createUser = (data) => User.create(data)

const getAllUsers = () => User.find().select('-password')

const findByEmail = (email) =>
    User.findOne({ email: email.toLowerCase().trim() }).select('+password')

const findById = (id) => User.findById(id).select('-password')

const updatePasswordById = (id, password) =>
    User.findByIdAndUpdate(id, { password }, { new: true })

module.exports = {
    createUser,
    getAllUsers,
    findByEmail,
    findById,
    updatePasswordById,
}
