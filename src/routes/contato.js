const express = require('express');
const router = express.Router();
const ContatoController = require('../controllers/ContatoController');

/* GET Contato page. */
router.get('/', ContatoController.index);

module.exports = router;