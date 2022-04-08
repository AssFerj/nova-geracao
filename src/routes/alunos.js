const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res)=>{
    res.render('alunos', {title: 'Alunos | Nova Geração'});
});
module.exports = router;