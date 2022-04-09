const express = require('express');
const router = express.Router();
const ContasController = require('../controllers/ContasController');


/* GET Contas page. */
router.get('/', ContasController.index);

module.exports = router;