// controllers/bookController.js
const bookModel = require('../model/bookModel');
const authorModel = require('../../Author/model/authorModel');
//helper 
async function getAuthor(author_id) {
    const author = await authorModel.getAuthor(author_id);
    return author;
}

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
        // console.log('req.body:', req.body);
        const { title, description, author_id,cover } = req.body;
        // console.log('title:', title, 'description:', description, 'author_id:', author_id);
        // get author name and email and add it to the book
        const author = await getAuthor(author_id);
            console.log(author);
        const data = await bookModel.addBook(title, description, author_id,cover, author[0].name, author[0].email);
        console.log(data);
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
