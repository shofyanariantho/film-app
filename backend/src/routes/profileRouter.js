const express = require('express')
const profileController = require('../controllers/profileController')
const router = express.Router()

router.post(
    '/create', 
    profileController.validate("createProfile"),
    profileController.create
);

router.get("/profile", profileController.index);
router.get("/show/:id", profileController.show);

router.put(
    "/update/:id",
    profileController.validate("updateProfile"),
    profileController.update
);

router.delete("/delete/:id", profileController.destroy);

module.exports = router