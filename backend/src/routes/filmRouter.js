const express = require('express')
const filmController = require('../controllers/filmController')
const router = express.Router()

router.post('/create', filmController.create);
router.get("/film", filmController.index);
router.get("/show/:id", filmController.show);
router.put("/update/:id", filmController.update);
router.delete("/delete/:id", filmController.destroy);

module.exports = router