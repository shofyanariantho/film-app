const express = require("express");
const directorController = require("../controllers/directorController");
const router = express.Router();

router.post(
    "/create",
    directorController.validate("createDirector"),
    directorController.create
);

router.get("/director", directorController.index);
router.get("/show/:id", directorController.show);

router.put(
    "/update/:id",
    directorController.validate("updateDirector"),
    directorController.update
);

router.delete("/delete/:id", directorController.destroy);

module.exports = router;
