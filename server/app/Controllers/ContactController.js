const asyncHandler = require('express-async-handler')

const Contact = require('../models/Contact')


const contactList = asyncHandler(
    async (req, res) => {
        const contactList = await Contact.find()
        res.status(200).json(contactList)
    }
)

const contactGetById = asyncHandler(
    async (req, res) => {
        res.status(200).json({message:`get contacts ${req.params.id}`})
    }
)

const contactCreate = asyncHandler(
    async (req, res) => {
        if (!req.body.text) {
            res.status(400)
            throw new Error('Please add a text field')
          }
        res.status(200).json({message:`create contacts`})
    }
)

const contactUpdate = asyncHandler(
    async (req, res) => {
        res.status(200).json({message:`get contacts ${req.params.id}`})
    }
)

const contactDelete = asyncHandler(
    async (req, res) => {
        res.status(200).json({message:`get contacts ${req.params.id}`})
    }
)

module.exports = {
    contactList,
    contactGetById,
    contactCreate,
    contactUpdate,
    contactDelete
}