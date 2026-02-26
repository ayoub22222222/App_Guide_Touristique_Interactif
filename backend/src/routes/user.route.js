const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { requireAuth } = require('../middlewares/auth.middleware')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/me', requireAuth, userController.me)
router.get('/', requireAuth, userController.getUsers)

module.exports = router
