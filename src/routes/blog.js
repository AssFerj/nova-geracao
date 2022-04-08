const express = require('express');
const router = express.Router();

/* GET sobre page. */
router.get('/', (req, res, next)=>{
    res.render('blog', { title: 'Nova Geração | Blog'});
});

module.exports = router;