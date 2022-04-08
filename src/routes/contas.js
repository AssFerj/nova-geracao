const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res)=>{
    res.render('contas', {title: 'Nova Geração | Contas'});
});
module.exports = router;