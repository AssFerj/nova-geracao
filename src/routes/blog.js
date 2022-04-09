const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController')

/* GET Blog page. */
router.get('/', BlogController.index);

module.exports = router;