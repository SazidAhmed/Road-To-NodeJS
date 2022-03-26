const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
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

const generateSignature = asyncHandler(
    async(req, res) =>{
        const accountSigningKey = req.params.key;
        const account = new Account(accountSigningKey);
        const message = await bcrypt.genSalt(10)
        const signature = account.createSignature(message);

        const verified = Account.verifySignature(message,signature, account.accountNumberHex);

        if (verified) {
            res.status(201).json({
                public_key: account.accountNumberHex,
                private_key: account.signingKeyHex,
                signature: signature
            })
        } else {
            res.status(404)
            throw new Error('Not found')
        }
    }
)

module.exports ={
    createNewAccount,
    generatePublicKey,
    generateSignature
}