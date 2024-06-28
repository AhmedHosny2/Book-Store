// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/AuthorController')

router.post('/add', authorController.addAuthor);
router.get('/:id', authorController.getAuthor);
router.get('/', authorController.getAuthors);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;

