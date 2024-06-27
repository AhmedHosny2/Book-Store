// models/bookModel.js
const pool = require('../../config/db_config');

async function getBooks() {
    const [data] = await pool.query('SELECT * FROM book');
    return data;
}

async function addBook(title, description, author_id,cover, author_name, author_email) {
    console.log('author_id:', author_id, 'author_name:', author_name, 'author_email:', author_email);
    const [data] = await pool.query('INSERT INTO book (title, description, author_id, cover, author_name, author_email) VALUES (?, ?, ?, ?, ?, ?)', [title, description, author_id,cover, author_name, author_email]);
    return data;
}

async function deleteBook(id) {
    const [data] = await pool.query('DELETE FROM book WHERE id = ?', [id]);
    return data;
}

module.exports = {
    getBooks,
    addBook,
    deleteBook
};
