const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../controllers/refreshToken");

router.post("/register", userController.create); // Register
<<<<<<< HEAD
router.get("/", userController.index); // Index User by Their Id
router.put("/", verifyToken, userController.update); // Update Password by Their Id
=======
router.get("/:id", verifyToken, userController.index); // Index User by Their Id
router.put("/:id", verifyToken, userController.update); // Update Password by Their Id
>>>>>>> f6e887af11f2ae267efa22ef845b7ad995e55fd9
router.post("/login", userController.login); // Login
router.get("/token", refreshToken); // Refresh Token
router.delete("/logout", userController.logout); // Logout

module.exports = router;
