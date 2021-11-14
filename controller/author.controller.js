const AuthorService = require('../service/author.service');

const getAllAuthors = async (req, res) => {
  try {
    const authors = await AuthorService.getAllAuthors();
    res.status(200).send(authors);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await AuthorService.getAuthorById(req.params.id);
    res.status(200).send(author);
  } catch (e) {
    res.status(500).send(e);
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = await AuthorService.createAuthor(req.body);
    res.status(200).send(author);
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateAuthorById = async (req, res) => {
  try {
    const author = await AuthorService.updateAuthorById(
      req.params.id,
      req.body
    );
    res.status(200).send(author);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteAuthorById = async (req, res) => {
  try {
    const author = await AuthorService.deleteAuthorById(req.params.id);
    res.status(200).send(author);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthorById,
  deleteAuthorById,
};
