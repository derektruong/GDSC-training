const { createBookDto } = require('../dto/createBook.dto');
const {
  createBookService,
  getBooksService,
} = require('../service/book.service');

async function createBook(req, res) {
  const newBook = await createBookService(createBookDto(req.body));

  res.json({
    message: 'Book created',
  });
}

async function getBooks(req, res) {
  const query = req.query;

  const foundBooks = await getBooksService(query);
  console.log(foundBooks);
  return res.json(foundBooks);
}

async function getBookById(req, res) {
  const id = req.params.id;
  const foundBook = await getBooksService();

  const book = foundBook.find((book) => book.id === +id);

  if (!book) {
    return res.status(404).json({
      message: 'Book not found',
    });
  } else {
    return res.json(book);
  }
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
};
