

// @ts-check
/**
 * @param {import("knex")} knex
 */

 // @ts-ignore
 exports.seed = knex => knex('authors').del() 
 // @ts-ignore
 .then(() => knex('authors').insert([
     {
        name: 'J.K. Rowling',
        address: '123 Fake Street',
     },
     {
        name: 'Stephen King',
        address: '456 Fake Street',
     },
     {
        name: 'J.R.R. Tolkien',
        address: '789 Fake Street',
     }
 ]));