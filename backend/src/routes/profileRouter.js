const express = require('express')
const profileController = require('../controllers/profileController')
const router = express.Router()

router.post('/create', profileController.create)

module.exports = router