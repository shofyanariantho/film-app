const express = require('express')
const filmController = require('../controllers/filmController')
const router = express.Router()

router.post('/create', filmController.create);
router.get('/', filmController.index);
router.get('/:id', filmController.show);
router.put('/:id', filmController.update);
router.delete('/:id', filmController.destroy);
router.post('/image/:id', filmController.upload);

module.exports = router