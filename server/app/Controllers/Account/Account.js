const asyncHandler = require('express-async-handler')
const { Account } = require('thenewboston')

const createNewAccount = asyncHandler(
    async(req, res) =>{
        const account = new Account();

        if (account) {
            res.status(201).json({
                public_key: account.accountNumberHex,
                private_key: account.signingKeyHex
            })
        } else {
            res.status(404)
            throw new Error('Not found')
        }
    }
)

const generatePublicKey = asyncHandler(
    async(req, res) =>{
        const accountSigningKey = req.params.key;
        const account = new Account(accountSigningKey);

        if (account) {
            res.status(201).json({
                public_key: account.accountNumberHex,
                private_key: account.signingKeyHex
            })
        } else {
            res.status(404)
            throw new Error('Not found')
        }
    }
)

module.exports ={
    createNewAccount,
    generatePublicKey
}