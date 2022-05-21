const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post(
    "/create",
    userController.validate("createUser"), // validator
    userController.create
);

module.exports = router;