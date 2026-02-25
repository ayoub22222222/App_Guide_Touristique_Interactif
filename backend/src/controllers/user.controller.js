const userService = require('../services/user.services')

const register = async (req, res) => {
    try {
        const payload = await userService.registerUser(req.body)
        res.status(201).json(payload)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const login = async (req, res) => {
    try {
        const payload = await userService.loginUser(req.body)
        res.status(200).json(payload)
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
}

const me = async (req, res) => {
    try {
        const user = await userService.getCurrentUser(req.userId)
        res.status(200).json({ user })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const getUsers = async (req, res) => {
    const users = await userService.getUsers()
    res.json(users)
}

module.exports = {
    register,
    login,
    me,
    getUsers,
}
