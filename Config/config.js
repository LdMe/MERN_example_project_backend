/*
*
*/
database= require('./database');
config = {
	port : 4242,
	hostname : 'localhost',
	key : 'my_random_key',
	database : database,
	app : null,
	uploadPath: '/public/uploads/',
	dirname: __dirname.split("/Config")[0],
	ObjectId: require('mongoose').Types.ObjectId,
	express: require('express'),
	initApp : function() {
		/*
		*---------------------------------------
		*	MIDDLEWARE INITIALIZATION
		*---------------------------------------
		*/

		//Cross-origin resource sharing
		const cors = require('cors');
		//Cookie parser to save cookies
		const cookeParser = require('cookie-parser');
		//Manage user session
		const session = require('express-session');
		//Add new routes to router
		const router = require('../Router/router');
		//Body parser to get post data from request
		const bodyParser = require('body-parser');
		//SocketIO to create real-time socket connection between the server and the client
		//TODO : add functionalities to sockets
		const hhtp = require('http');
		const socketIO = require('socket.io');


		this.app = this.express();
		this.app.use(cors({
			//Only localhost acces. TODO: access for everyone
			origin : ['http://localhost:3000','http://127.0.0.1:3000'],
			methods : ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
			credentials : true
		}));
		this.app.use(this.express.json());
		this.app.use(this.express.urlencoded({extended : true}));
		// Body parser was commented

		//middleware to save session
		this.app.use(cookieParser());
		this.app.use(session({
			cookie : {
				path : '/',
				httpOnly : false,
				maxAge: 24*60*60*10
			},
			secret : 'secretWord',
			resave : false,
			saveUninitialized : true
		}));

		this.app.use(router);
		this.app.listen(this.port, function() {
			console.log('example app listening on port '+ port);
		});
		return this.app;

	}
}

module.exports = config;