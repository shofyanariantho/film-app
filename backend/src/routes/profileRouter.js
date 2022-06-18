const express = require('express')
const profileController = require('../controllers/profileController')
const { verifyLogin } = require('../middleware/verifyLogin');
const router = express.Router()

router.post('/create', verifyLogin, profileController.create);
router.get("/", profileController.index);
router.get("/:id", profileController.show);
router.put("/:id", profileController.update);
router.delete("/:id", profileController.destroy);

module.exports = router