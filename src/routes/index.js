const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');


/* GET Home page. */
router.get('/', HomeController.index);

module.exports = router;
