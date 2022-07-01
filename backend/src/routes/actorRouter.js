const express = require("express");
const actorController = require("../controllers/actorController");
const { verifyLogin } = require("../middleware/verifyLogin"); // Middleware for Auth
const router = express.Router();

router.post("/create", verifyLogin, actorController.create); // Create
router.get("/", actorController.index); // Index
router.get("/:id", actorController.show); // Show
router.put("/:id", verifyLogin, actorController.update); // Update
router.delete("/:id", verifyLogin, actorController.destroy); // Delete
router.post("/image/:id", verifyLogin, actorController.upload); // Upload Image

module.exports = router;
