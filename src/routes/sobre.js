const express = require('express');
const router = express.Router();

/* GET sobre page. */
router.get('/', (req, res, next)=>{
    res.render('sobre', { title: 'Nova Geração | Sobre'});
});

module.exports = router;