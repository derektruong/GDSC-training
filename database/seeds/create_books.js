

  
// @ts-check
/**
 * @param {import("knex")} knex
 */

 // @ts-ignore
 exports.seed = knex => knex('books').del()
 // @ts-ignore
 .then(() => knex('books').insert([
     {
        title: 'The Lord of the Rings',
        author_id: 1,
     },
     {
        title: 'The Hobbit',
        author_id: 2,
     },
     {
        title: 'The Catcher in the Rye',
        author_id: 3,
     }
 ]));