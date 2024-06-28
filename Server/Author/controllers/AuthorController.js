// controllers/bookController.js
const authorModel = require('../model/authorModel');
// crud operations 
// add author
exports.addAuthor = async (req, res) => {
    const {name,email, bio} = req.body;
    const author = await authorModel.addAuthor( name, email, bio);
    res.status(201).json({ message: 'Author added successfully', author });
}
// get all authors
exports.getAuthors = async (req, res) => {
    const authors = await authorModel.getAuthors();
    console.log(authors);
    res.status(200).json(authors);
}
// get author by id
exports.getAuthor = async (req, res) => {
    const { id } = req.params;
    const author = await authorModel.getAuthor(id);
    res.status(200).json(author);
}

// delete author
exports.deleteAuthor = async (req, res) => {
    const { id } = req.params;
    const author = await authorModel.deleteAuthor(id);
    res.status(200).json({ message: 'Author deleted successfully', author });
}
