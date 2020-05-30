/*


*/
const HOST = 'localhost'
const PORT = 27042
const DATABASENAME = 'mern-api';
const mongoose = require('mongoose');
const server = HOST +':'+ PORT;
const database = DATABASENAME;

class Database {
	constructor(){
		copnsole.log("loading database");
		this._connect();
	}
	_connect(){
		let url = 'mongodb://'+ server + '/' + database;
		mongoose.connect(url, {useUnifiedTopology: true}).then(() => {
			console.log('Database connection successful');
		}).catch(err => {
			console.log('Database connection error');
		});
	}
}

module.exports = new Database()