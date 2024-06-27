// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/add', bookController.addBook);
router.delete('/:id', bookController.deleteBook);
router.get('/', bookController.getBooks);

module.exports = router;
