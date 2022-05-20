const express = require('express')
const genreController = require('../controllers/genreController')
const router = express.Router()

router.post('/create', genreController.create)

module.exports = router