const express = require("express");
const actorController = require("../controllers/actorController");
const router = express.Router();

router.post(
  "/",
  actorController.validate("createActor"),
  actorController.create
);

module.exports = router;
