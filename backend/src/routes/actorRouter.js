const express = require('express')
const actorController = require('../controllers/actorController')
const router = express.Router()

router.post('/create', actorController.create)

module.exports = router