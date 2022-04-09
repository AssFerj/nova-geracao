const express = require('express');
const router = express.Router();
const InstrutoresController = require('../controllers/InstrutoresController');


/* GET Instrutores page. */
router.get('/', InstrutoresController.index);

module.exports = router;