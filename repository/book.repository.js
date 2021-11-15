const connection = require('../database');

async function findBooks(query) {
  try {
    return connection('books')
      .join('authors', 'books.author_id', '=', 'authors.id')
      .select(
        'books.id',
        'books.title',
        { authorId: 'books.author_id' },
        { createdAt: 'books.created_at' },
        { updatedAt: 'books.updated_at' },
        'authors.name',
        'authors.address'
      );
  } catch (error) {
    console.log(error);
  }
}

async function createBook(book) {
  try {
    return connection('books').insert(book);
  } catch (error) {
    console.log(error);
  }
}

const deleteBooksByAuthorId = async (authorId) => {
  try {
    return connection('books').where('author_id', authorId).del();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  findBooks,
  createBook,
  deleteBooksByAuthorId
};
