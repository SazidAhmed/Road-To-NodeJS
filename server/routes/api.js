const express = require('express')
const router = express.Router()

//Middleware
const { protect } = require('../app/middleware/AuthMiddleware')

//Controllers
const { register, login, authUser } = require('../app/Controllers/Auth/AuthController')

//Auth apis
router.post('/register', register)
router.post('/login', login)
router.get('/authUser', protect, authUser)

module.exports = router