const express = require('express');
const router = express.Router();
const AlunosController = require('../controllers/AlunosController')


/* GET Alunos page. */
router.get('/', AlunosController.index);

/* Cadastro de Alunos */
router.post('/', AlunosController.cadastrar);

module.exports = router;