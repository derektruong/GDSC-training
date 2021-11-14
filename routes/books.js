const express = require('express');
const { createBook, getBooks, getBookById } = require('../controller/book.controller');
const createBookMiddleware = require('../middlewares/create-book.middleware');
const router = express.Router();

router.get('/', getBooks);

router.get('/:id', getBookById);

router.post('/', createBookMiddleware, createBook);

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  const book = req.body;

  const index = books.findIndex((book) => book.id == id);
  if (index === -1) {
    res.status(404).send('Book not found');
  } else {
    book.id = id;
    books[index] = book;
    res.json({
      message: 'Book updated',
    });
  }
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  const index = books.findIndex((book) => book.id == id);
  if (index === -1) {
    res.status(404).send('Book not found');
  } else {
    books.splice(index, 1);
    res.json({
      message: 'Book deleted',
    });
  }
});

module.exports = router;
