// models/bookModel.js
const pool = require('../../config/db_config');
// crud operations 
// each author got name , email , id, bio 
// and each book get author id as refernce 
// so we can get all books for specific author
// or get all authors for specific book
// get all authors
// create function that take author id and return all books for this author
async function getBooksByAuthorId(author_id) {
    const [books] = await pool.query('SELECT * FROM book WHERE author_id = ?', [author_id]);
    return books;
}

async function getAuthors() {
   const [authors] = await pool.query('SELECT * FROM author');
   // append all autor books to each author
    for (let author of authors) {
         author.books = await getBooksByAuthorId(author.id);
    }
    return authors;
}
// add author
async function addAuthor(name, email, bio) {
    const [data] = await pool.query('INSERT INTO author (name, email, bio) VALUES (?, ?, ?)', [name, email, bio]);
    return data;
}
// delete author
async function deleteAuthor(id) {
 // delete his books first 
    await pool.query('DELETE FROM book WHERE author_id = ?', [id]);
    const [data] = await pool.query('DELETE FROM author WHERE id = ?', [id]);
    return data;

}
async function getAuthor(id) {
    const [author] = await pool.query('SELECT * FROM author WHERE id = ?', [id]);
  const   books  = await getBooksByAuthorId(author[0].id);
    // console.log(author[0].id);
    author[0].books = books;
    console.log(author);
    // console.log(author);
    return author;
}

module.exports = {
    getAuthors,
    addAuthor,
    deleteAuthor,
    getAuthor
};
