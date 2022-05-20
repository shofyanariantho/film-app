const express = require('express')
const filmController = require('../controllers/filmController')
const router = express.Router()

router.post('/create', filmController.create)

module.exports = router