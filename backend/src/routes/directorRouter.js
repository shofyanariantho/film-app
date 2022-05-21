const express = require("express");
const directorController = require("../controllers/directorController");
const router = express.Router();

router.post(
    "/create",
    directorController.validate("createDirector"),
    directorController.create
);

module.exports = router;
