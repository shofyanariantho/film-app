const express = require('express')
const genreController = require('../controllers/genreController')
const router = express.Router()

router.post(
    '/create', 
    genreController.validate("createGenre"),
    genreController.create
);

module.exports = router