const express = require('express')
const profileController = require('../controllers/profileController')
const router = express.Router()

router.post('/create', profileController.create);
router.get("/", profileController.index);
router.get("/:id", profileController.show);
router.put("/:id", profileController.update);
router.delete("/:id", profileController.destroy);

module.exports = router