const express = require('express')
const filmController = require('../controllers/filmController')
const router = express.Router()

router.post(
    '/create', 
    filmController.validate("createFilm"),
    filmController.create
);

router.get("/film", filmController.index);
router.get("/show/:id", filmController.show);

router.put(
    "/update/:id",
    filmController.validate("updateFilm"),
    filmController.update
);

router.delete("/delete/:id", filmController.destroy);

module.exports = router