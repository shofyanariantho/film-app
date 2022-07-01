const express = require("express");
const directorController = require("../controllers/directorController");
const { verifyLogin } = require('../middleware/verifyLogin'); // Middleware for Auth
const router = express.Router();

router.post("/create", verifyLogin, directorController.create); // create
router.get("/", directorController.index); // index
router.get("/:id", directorController.show); // show
router.put("/:id", verifyLogin, directorController.update); // update
router.delete("/:id", verifyLogin, directorController.destroy); // delete
router.post("/image/:id", verifyLogin, directorController.upload); // upload

module.exports = router;
