const express = require('express')
const profileController = require('../controllers/profileController')
const { verifyLogin } = require('../middleware/verifyLogin'); // Middleware for Auth
const router = express.Router()

router.post('/create', verifyLogin, profileController.create);
router.get("/", profileController.index);
router.get("/:id", profileController.show);
router.put("/:id", verifyLogin, profileController.update);
router.delete("/:id", verifyLogin, profileController.destroy);

module.exports = router