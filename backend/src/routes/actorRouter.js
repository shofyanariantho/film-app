const express = require("express");
const actorController = require("../controllers/actorController");
const router = express.Router();

// Router Create
router.post(
  "/create",
  actorController.validate("createActor"), // Validator
  actorController.create
);

// Router Read
router.get("/", actorController.index); // All Actor List
router.get("/:id", actorController.show); // Find Actor by Id

// Router Update
router.put(
  "/:id",
  actorController.validate("updateActor"),
  actorController.update
);

// Router Delete
router.delete("/:id", actorController.destroy);

module.exports = router;
