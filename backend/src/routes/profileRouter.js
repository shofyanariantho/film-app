const express = require('express')
const profileController = require('../controllers/profileController')
const router = express.Router()

router.post('/create', profileController.create);
router.get("/profile", profileController.index);
router.get("/show/:id", profileController.show);
router.put("/update/:id", profileController.update);
router.delete("/delete/:id", profileController.destroy);

module.exports = router