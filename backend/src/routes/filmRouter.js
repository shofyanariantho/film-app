const express = require("express");
const filmController = require("../controllers/filmController");
const { verifyLogin } = require("../middleware/verifyLogin"); // Middleware for Auth
const router = express.Router();

router.post("/create", verifyLogin, filmController.create);
router.get("/", filmController.index);
router.get("/:id", filmController.show);
router.post("/:id", verifyLogin, filmController.update);
router.delete("/:id", verifyLogin, filmController.destroy);
router.post("/image/:id", verifyLogin, filmController.upload);

module.exports = router;
