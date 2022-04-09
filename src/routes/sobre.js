const express = require('express');
const router = express.Router();
const SobreController = require('../controllers/SobreController');

/* GET sobre page. */
router.get('/', SobreController.index)


module.exports = router;