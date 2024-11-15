const express = require('express')
const validation = require('../middlewares/validation')
const {socialsRead, socialsUpdate} = require('../controllers/socials')

const router = express.Router()

router.get('/', validation, socialsRead)
router.put('/socials', validation, socialsUpdate)

module.exports = router
