const express = require('express')
const validation = require('../middlewares/validation')
const {socialsRead, socialsUpdate} = require('../controllers/socials')
const {pictureRead, pictureUpdate} = require('../controllers/picture')
const {publicationRead, publicationCreate} = require('../controllers/publication')

const router = express.Router()

router.get('/', validation, socialsRead)
router.put('/socials', validation, socialsUpdate)
router.get('/picture', validation, pictureRead)
router.put('/picture', validation, pictureUpdate)
router.get('/publication', publicationRead)
router.post('/publication', validation, publicationCreate)

module.exports = router
