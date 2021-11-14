/**
 * create author
 * get all author
 * get author by id
 * update author
 * delete author
 */

 const express = require('express');
 const { createAuthor, getAllAuthors, getAuthorById, updateAuthorById, deleteAuthorById } = require('../controller/author.controller');
 const createAuthorMiddleware = require('../middlewares/create-author.middleware');
 const router = express.Router();
 
 router.get('/', getAllAuthors);
 
 router.get('/:id', getAuthorById);
 
 router.post('/', createAuthorMiddleware, createAuthor);
 
 router.put('/:id', createAuthorMiddleware, updateAuthorById);
 
 router.delete('/:id', createAuthorMiddleware, deleteAuthorById);
 
 module.exports = router;