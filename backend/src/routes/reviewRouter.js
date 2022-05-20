const express = require('express')
const reviewController = require('../controllers/reviewController')
const router = express.Router()

router.post('/create', reviewController.create)

module.exports = router