const express = require('express');
const router = express.Router();
const PainelController = require('../controllers/PainelController');


/* GET home page. */
router.get('/', PainelController.index);

module.exports = router;