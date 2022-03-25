const asyncHandler = require('express-async-handler')

const Contact = require('../models/User')


const register = asyncHandler(
    async (req, res) => {
        
        res.status(200).json('ok')
    }
)

const login = asyncHandler(
    async (req, res) => {
        
        res.status(200).json('ok')
    }
)

const getMe = asyncHandler(
    async (req, res) => {
    res.status(200).json(req.user)
  }
)

module.exports ={
    register,
    login,
    getMe
}