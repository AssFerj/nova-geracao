const express = require('express');
const router = express.Router();

/* GET sobre page. */
router.get('/', (req, res, next)=>{
    res.render('contato', { title: 'Nova Geração | Contato'});
});

module.exports = router;