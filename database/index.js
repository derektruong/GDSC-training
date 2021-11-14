const knex = require('knex');
const config = require('../knexfile');

const connection = knex(config[process.env.NODE_ENV]);

module.exports = connection;

module.exports.connectDatabase = async () => {
	try {
		await connection.raw('SELECT 1');
		console.log('Database connected successfully');
	} catch (err) {
		console.log(err);
		console.log('Database connection error, please check connection and try again.');
	}
}