/******************************REQUIRED MODULES**************************/
var express = require('express'); // Loads the piece of middleware for sessions
var app = express();
const morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
const cookieParser = require('cookie-parser');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var events = require('events');
var route = express.Route();

/*********************Local Files Modules**************/
var LoginRoutes = require('./api/routes/login');
var PasswordChangeRoutes = require('./api/routes/PasswordChanged');
var MyListsRoutes = require('./api/routes/MyLists');
var RegisterRoutes = require('./api/routes/register');
var ProfileRoutes = require('./api/routes/Profile');
var LogoutRoutes = require('./api/routes/Logout');
var UnsubscribeRoutes = require('./api/routes/unsubscribe');
//What is that?
/****************************Load DB **********************************/
var db = require('./connect');

/******OTHER****/
var LoggedIn = false;

//HIDE PASSWORD LATER
var uri = "mongodb://Midri:Mmta1-49@hndirc-shard-00-00-uu47g.mongodb.net:27017,hndirc-shard-00-01-uu47g.mongodb.net:27017,hndirc-shard-00-02-uu47g.mongodb.net:27017/test?ssl=true&replicaSet=HndirC-shard-0&authSource=admin";

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');



/******************Connect to db and execute code************/
db.Connexion(uri, function(err){
	console.log('db Connection....');
	if(err){
		console.log('Unable to connect to Mongo.');
		process.exit(1);
	}
	else{
		app.listen(8080, function(){
			console.log(db.get().db("Hndir").collection("Users"));
			console.log("Listening on port 8080...");
	


			/**************************SESSION & COOKIE HANDLING***********************************/
			//app.use(session({secret :'ulala', resave = false, saveUninitialized: true, store: new MongoStore({ mongooseConnection: db})}));
			app.set('view engine', 'ejs');	
			app.use('/uploads', express.static('uploads'));
			app.use(bodyParser.urlencoded({ extended: false }));
			app.use(bodyParser.json());

			//To be able to load the ejs file
			app.use(express.static(path.join(__dirname, 'public')));
			app.use((req, res, next)=>{
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
				if(req.method === "OPTIONS"){
					res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
					return res.status(200).json({});
				}
				next();
			});	

			//**************************************CODE TO DIFFERENT ROUTES

			app.use('/login', LoginRoutes);
			app.use('/submit', LoginRoutes);
			app.use('/profile', ProfileRoutes);
			app.use('/UpdateProfile', ProfileRoutes);
			app.use('/logout', LogoutRoutes);
			app.use('/register', RegisterRoutes);
			app.use('/PasswordChanged', PasswordChangeRoutes);
			app.use('/MyLists', MyListsRoutes);
			app.use('/unsubscribe', UnsubscribeRoutes);
			app.get('/', function(req, res){
					res.render('pages/home');
					console.log("Home Page");
			});



			//manage 404 errors
			app.use(function(req, res, next){
			    res.setHeader('Content-Type', 'text/plain');
			    res.send(404, 'Page cannot be found!');
			});

		//});
		});
	}
});



/********************EXPORTS***********************/
exports.LoggedIn= LoggedIn;
module.exports = app;
