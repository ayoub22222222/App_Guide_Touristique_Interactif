const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userRepo = require('../repositories/user.repository')

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me'
const TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

const sanitizeUser = (user) => ({
    id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
})

const signToken = (userId) =>
    jwt.sign({ userId }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN })

const registerUser = async (data) => {
    const { firstname, lastname, email, password } = data
    if (!firstname || !lastname || !email || !password) {
        throw new Error('firstname, lastname, email and password are required')
    }

    const existing = await userRepo.findByEmail(email)
    if (existing) {
        throw new Error('email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await userRepo.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword,
    })

    return {
        token: signToken(user._id.toString()),
        user: sanitizeUser(user),
    }
}

const loginUser = async (data) => {
    const { email, password } = data
    if (!email || !password) {
        throw new Error('email and password are required')
    }

    const user = await userRepo.findByEmail(email)
    if (!user) {
        throw new Error('invalid credentials')
    }

    let isMatch = false
    if (typeof user.password === 'string' && user.password.startsWith('$2')) {
        isMatch = await bcrypt.compare(password, user.password)
    } else {
        isMatch = user.password === password
        if (isMatch) {
            const upgradedPassword = await bcrypt.hash(password, 10)
            await userRepo.updatePasswordById(user._id, upgradedPassword)
        }
    }

    if (!isMatch) {
        throw new Error('invalid credentials')
    }

    return {
        token: signToken(user._id.toString()),
        user: sanitizeUser(user),
    }
}

const getCurrentUser = async (userId) => {
    const user = await userRepo.findById(userId)
    if (!user) {
        throw new Error('user not found')
    }
    return sanitizeUser(user)
}

const getUsers = () => userRepo.getAllUsers()

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser,
    getUsers,
}
