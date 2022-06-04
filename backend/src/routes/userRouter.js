const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../controllers/refreshToken");

router.post("/register", userController.create); // Register
router.get("/", verifyToken, userController.index); // Index User by Their Id
router.put("/", verifyToken, userController.update); // Update Password by Their Id
router.post("/login", userController.login); // Login
router.get("/token", refreshToken);
router.delete("/logout", userController.logout);

module.exports = router;
