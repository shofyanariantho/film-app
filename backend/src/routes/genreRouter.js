const express = require("express");
const genreController = require("../controllers/genreController");
const { verifyLogin } = require('../middleware/verifyLogin');
const router = express.Router();

router.post("/create", verifyLogin, genreController.create); // create
router.get("/", genreController.index); // index
router.get("/:id", genreController.show); // show
router.put("/:id", genreController.update); // update
router.delete("/:id", genreController.destroy); // delete

module.exports = router;
