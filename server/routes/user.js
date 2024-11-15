const express = require('express')
const validation = require('../middlewares/validation')
const {socialsRead, socialsUpdate} = require('../controllers/socials')
const {pictureRead, pictureUpdate} = require('../controllers/picture')

const router = express.Router()

router.get('/', validation, socialsRead)
router.put('/socials', validation, socialsUpdate)
router.get('/picture', validation, pictureRead)
router.put('/picture', validation, pictureUpdate)

module.exports = router
