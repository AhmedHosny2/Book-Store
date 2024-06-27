// controllers/bookController.js
const bookModel = require('../model/bookModel');

async function getBooks(req, res) {
    try {
        const data = await bookModel.getBooks();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error retrieving books:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function addBook(req, res) {
    try {
        console.log('req.body:', req.body);
        const { title, description, author_id } = req.body;
        console.log('title:', title, 'description:', description, 'author_id:', author_id);
        const data = await bookModel.addBook(title, description, author_id);
        res.status(201).json({ message: 'Book added successfully', data });
    } catch (err) {
        console.error('Error adding book:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const data = await bookModel.deleteBook(id);
        res.status(200).json({ message: 'Book deleted successfully', data });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getBooks,
    addBook,
    deleteBook
};
