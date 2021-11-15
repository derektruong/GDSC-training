const connection = require('../database');
const BookRepository = require('./book.repository');

const getAllAuthors = async () => {
	return connection('authors')
	.select();
};

const getAuthorById = async (id) => {
	return connection('authors').select('*').where('id', id).first();
};

const createAuthor = async (author) => {
	return connection('authors').insert(author);
}

const updateAuthorById = async (id, author) => {
	return connection('authors').where('id', id).update(author);
}

const deleteAuthorById = async (id) => {
	await BookRepository.deleteBooksByAuthorId(id);
	return connection('authors').where('id', id).del();
}

module.exports = {
	getAllAuthors,
	getAuthorById,
	createAuthor,
	updateAuthorById,
	deleteAuthorById
};