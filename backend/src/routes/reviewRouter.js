const express = require('express')
const reviewController = require('../controllers/reviewController')
const router = express.Router()

router.post(
    '/create', 
    reviewController.validate("createReview"),
    reviewController.create
);

router.get("/review", reviewController.index);
router.get("/show/:id", reviewController.show);

router.put(
    "/update/:id",
    reviewController.validate("updateReview"),
    reviewController.update
);

router.delete("/delete/:id", reviewController.destroy);

module.exports = router