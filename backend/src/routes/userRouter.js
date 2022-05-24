const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post(
    "/create",
    userController.validate("createUser"), // validator
    userController.create
);

router.get("/user", userController.index);
router.get("/user/:id", userController.show);

router.put(
    "/update/:id",
    userController.validate("updateUser"),
    userController.update
);

router.delete("/delete/:id", userController.destroy);

module.exports = router;