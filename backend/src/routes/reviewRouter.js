const express = require('express')
const reviewController = require('../controllers/reviewController')
const { verifyLogin } = require('../middleware/verifyLogin'); // Middleware for Auth
const router = express.Router()

router.post('/create', verifyLogin, reviewController.create);
router.get("/", reviewController.index);
router.get("/:id", reviewController.show);
router.put("/:id", verifyLogin, reviewController.update);
router.delete("/:id", verifyLogin, reviewController.destroy);

module.exports = router