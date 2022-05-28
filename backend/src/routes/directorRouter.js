const express = require("express");
const directorController = require("../controllers/directorController");
const router = express.Router();

router.post("/create", directorController.create); // create
router.get("/", directorController.index); // index
router.get("/:id", directorController.show); // show
router.put("/:id", directorController.update); // update
router.delete("/:id", directorController.destroy); // delete
router.post("/image/:id", directorController.upload); // upload

module.exports = router;
