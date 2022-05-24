const express = require('express')
const genreController = require('../controllers/genreController')
const router = express.Router()

router.post(
    '/create', 
    genreController.validate("createGenre"),
    genreController.create
);

router.get("/genre", genreController.index);
router.get("/show/:id", genreController.show);

router.put(
    "/update/:id",
    genreController.validate("updateGenre"),
    genreController.update
);

router.delete("/delete/:id", genreController.destroy);

module.exports = router