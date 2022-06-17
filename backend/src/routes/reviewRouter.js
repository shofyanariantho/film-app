const express = require('express')
const reviewController = require('../controllers/reviewController')
const router = express.Router()

router.post('/create', reviewController.create);
router.get("/", reviewController.index);
router.get("/:id", reviewController.show);
router.put("/:id",reviewController.update);
router.delete("/:id", reviewController.destroy);

module.exports = router