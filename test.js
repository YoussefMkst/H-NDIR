var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var http = require('http');
var Login = require('./login');
var reg = require('./register');
var Profile = require('./profile');
var dbfile = require('/login');

var session = require('express-session')
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var events = require('events');

var LoggedIn = false;
exports.LoggedIn= LoggedIn;

//Set session time
app.use(express.session({secret:'yoursecret', cookie:{maxAge:6000}}));


//View engine is ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//To be able to load the ejs file
app.use(express.static(path.join(__dirname, 'public')));

// Connect to Local DB USING URI
app.get('/', function(req, res){
		res.render('pages/home');
		console.log("Home Page");
});
app.get('/login', function(req, res){
	res.render('pages/login');
	console.log("within login");
});

app.post('/submit', function(req, res){
		Login.Authenticate(req, res);
});
app.get('/register', function(req, res){
	res.render('pages/register');
	console.log("within register");

});
app.post('/register', function(req, res){
	reg.Register(req, res);
});
app.get('/Profile', function(req, res){
	//Profile.Profile(req, res);
	res.render('pages/Profile');
	console.log("within profile");

});
app.post('/UpdateProfile', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Profile');

});

app.get('/myLists', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});
app.get('/ChangePassword', function(req, res){
	if(!LoggedIn){
		res.render('pages/ChangePassword');
		res.end('ChangePassword');
}	else{
		//Ask to enter email 
		//check if email exists
		//if yes: Send new PW
		//else: Redirect to same page again with warning

		res.redirect('/login');
}

});
app.post('/PasswordChanged', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	//print profile with message: change saved!
	res.end('Password Changed Successfully');

});
app.get('/unsubscribe', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('unsubscribe');

});
app.post('/unsubscribe', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('unsubscribe');

});
app.get('/Logout', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Logout');

});
app.post('/', function(req, res){
	LoggedIn = false;
	//close db when session is closed 
	dbfile.client.close();
	res.setHeader('Content-Type', 'text/plain');
	res.end('Logout');

});

//manage 404 errors
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page cannot be found!');
});
app.listen(8080);
//close db when session is closed 