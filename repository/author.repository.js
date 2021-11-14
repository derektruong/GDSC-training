const connection = require('../database');

const getAllAuthors = async () => {
	return connection('authors')
	.select();
};

const getAuthorById = async (id) => {
	return connection('authors').select('*').where('id', id).first();
};

module.exports = {
	getAllAuthors,
	getAuthorById
};