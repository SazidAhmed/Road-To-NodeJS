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
        const contact = await Contact.findById(req.params.id)

        if(!contact) {
            res.status(400)
            throw new Error('Contact not found')
        }

        res.status(200).json(contact)
    }
)

const contactCreate = asyncHandler(
    async (req, res) => {
        if (!req.body.name) {
            res.status(400)
            throw new Error('Please add a name field')
        }

        const contact = await Contact.create({
            name: req.body.name
        })
        
        res.status(200).json({
            message:'Contact created successfully',
            contact: contact
        })
    }
)

const contactUpdate = asyncHandler(
    async (req, res) => {
        const contact = await Contact.findById(req.params.id)

        if(!contact) {
            res.status(400)
            throw new Error('Contact not found')
        }

        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true})

        res.status(200).json({
            message:'Contact updated successfully',
            contact:updatedContact
        })
    }
)

const contactDelete = asyncHandler(
    async (req, res) => {
        const contact = await Contact.findById(req.params.id)

        if(!contact) {
            res.status(400)
            throw new Error('Contact not found')
        }
        
        await contact.remove()

        res.status(200).json({
            message:'Contact deleted successfully'
        })
    }
)

module.exports = {
    contactList,
    contactGetById,
    contactCreate,
    contactUpdate,
    contactDelete
}