const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
// const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../controllers/refreshToken");
const { verifyLogin } = require("../middleware/verifyLogin");

router.post("/register", userController.create); // Register
router.get("/", verifyLogin, userController.index); // Index User by Their Id
router.put("/", verifyLogin, userController.update); // Update Password by Their Id
router.post("/login", userController.login); // Login
router.get("/token", refreshToken); // Refresh Token
router.delete("/logout", userController.logout); // Logout

module.exports = router;
