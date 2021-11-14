const AuthorRepository = require('../repository/author.repository');

const getAllAuthors = async () => {
  const authors = await AuthorRepository.getAllAuthors();
  return authors;
};

const getAuthorById = async (id) => {
	const author = await AuthorRepository.getAuthorById(id);
	return author;
}

module.exports = {
  getAllAuthors,
  getAuthorById,
};
