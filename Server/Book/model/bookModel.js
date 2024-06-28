const pool = require('../../config/db_config');

// get all books 
async function getBooks() {
    const [data] = await pool.query('SELECT * FROM book');
    return data;
}
// get book by id
async function getBook(id) {
    const [data] = await pool.query('SELECT * FROM book WHERE id = ?', [id]);
    // get author data 
    const author_id = data[0].author_id;
    console.log('author_id:', data);
    const [author] = await pool.query('SELECT * FROM author WHERE id = ?', [author_id]);
    data[0].author = author[0];

    return data;
}

// add book
async function addBook(title, description, author_id,cover) {
    const [data] = await pool.query('INSERT INTO book (title, description, author_id, cover) VALUES (?, ?, ?, ?)', [title, description, author_id,cover]);
    return data;
}

// delete book
async function deleteBook(id) {
    const [data] = await pool.query('DELETE FROM book WHERE id = ?', [id]);
    return data;
}

module.exports = {
    getBooks,
    addBook,
    deleteBook,
    getBook

};
