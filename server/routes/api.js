const express = require('express')
const router = express.Router()

//Middleware
const { protect } = require('../app/middleware/AuthMiddleware')

//Controllers
const { register, login, authUser } = require('../app/Controllers/Auth/AuthController')
const { getTransactions } = require('../app/Controllers/Account/Transaction')
const { createNewAccount, generatePublicKey } = require('../app/Controllers/Account/Account')

//Auth apis
router.post('/register', register)
router.post('/login', login)
router.get('/authUser', protect, authUser)

//Blockchain apis
router.get('/getTransactions', getTransactions)

//Create Account
router.get('/createNewAccount', createNewAccount)
router.get('/generatePublicKey/:key', generatePublicKey)

module.exports = router