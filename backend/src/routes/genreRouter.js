const express = require("express");
const genreController = require("../controllers/genreController");
const router = express.Router();

router.post("/create", genreController.create); // create
router.get("/", genreController.index); // index
router.get("/:id", genreController.show); // show
router.put("/:id", genreController.update); // update
router.delete("/:id", genreController.destroy); // delete

module.exports = router;
