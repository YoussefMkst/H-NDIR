var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var http = require('http');
//var uri = "mongodb+srv://Midri:Mmta1-49@cluster0.mongodb.net/test";
var Connect = require('../../connect');



var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var app = express();
var events = require('events');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;

const router = express.Router();

//To be able to load the ejs file

router.get('/', function(req,res){
	res.render('pages/Profile');
	console.log("within profile");
});

router.post('/UpdateProfile', function(req, res){
		
			var Logger = require('./logger');
		    document.getElementById('Username').value = Logger.get().username;	
			document.getElementById('Email').value = Logger.get().email;
			
	});
/*app.use('/ChangePassword', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('ChangePassword');

});
app.use('/PasswordChanged', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('ChangePassword');

});
app.use('/UpdateProfile', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('ChangePassword');

});*/
module.exports = router;  