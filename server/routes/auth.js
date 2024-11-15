const express = require('express')
const authValidation = require('../middlewares/auth')
const {signin, signup} = require('../controllers/auth')

const router = express.Router()

router.post('/signin', authValidation, signin)

router.post('/signup', authValidation, signup)

module.exports = router
