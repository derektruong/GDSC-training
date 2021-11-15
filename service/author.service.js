const AuthorRepository = require('../repository/author.repository');

const getAllAuthors = async () => {
  const authors = await AuthorRepository.getAllAuthors();
  return authors;
};

const getAuthorById = async (id) => {
	const author = await AuthorRepository.getAuthorById(id);
	return author;
}

const createAuthor = async (body) => {
  const author = await AuthorRepository.createAuthor(body);
  return author;
}

const updateAuthorById = async (id, body) => {
  await AuthorRepository.updateAuthorById(id, body);
  return;
}

const deleteAuthorById = async (id) => {
  await AuthorRepository.deleteAuthorById(id);
  return;
}

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthorById,
  deleteAuthorById,
};
