const express = require('express')
const validation = require('../middlewares/validation')

const router = express.Router()

router.get('/', validation, (req, res) => {
    console.log('User details:', req.user)
    res.status(200).json([
        {
            name: "John Doe",
            age: 30
        },
        {
            name: "Jane Doe",
            age: 25
        }
    ])
})

module.exports = router
