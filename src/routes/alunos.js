const express = require('express');
const router = express.Router();
const AlunosController = require('../controllers/AlunosController')


/* GET Alunos page. */
router.get('/', AlunosController.index);

module.exports = router;