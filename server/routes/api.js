const express = require('express')
const router = express.Router()

const { contactList, contactGetById, contactCreate, contactUpdate, contactDelete } = require('../app/Controllers/ContactController')
const { register, login } = require('../app/Controllers/AuthController')

//Auth apis
router.post('/register', register)
router.post('/login', login)

//Contact apis
router.get('/contactList', contactList)

router.get('/contactGetById/:id', contactGetById)

router.post('/contactCreate', contactCreate)

router.put('/contactUpdate/:id', contactUpdate)

router.delete('/contactDelete/:id', contactDelete)

module.exports = router