const userSrvice = require("../services/user.services")


const createUser = async (req, res) => {
    try {
        const user = await userSrvice.createUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}


const getUsers = async (req, res) => {
    const users = await userSrvice.getUsers()
    res.json(users)
}

module.exports = {createUser, getUsers}