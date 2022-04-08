const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res)=>{
    res.render('instrutores', {title: 'Nova Geração | Instrutores'});
});
module.exports = router;