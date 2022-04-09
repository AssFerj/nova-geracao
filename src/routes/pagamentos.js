const express = require('express');
const router = express.Router();
const PagamentosController = require('../controllers/PagamentosController');


/* GET Pagamentos page. */
router.get('/', PagamentosController.index);

module.exports = router;