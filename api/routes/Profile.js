var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var http = require('http');
//var uri = "mongodb+srv://Midri:Mmta1-49@cluster0.mongodb.net/test";

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
var answer;
router.post('/UpdateProfile', function(req, res){
	
	MongoClient.connect(uri, function(err, client){
			if (err) throw err;
			var mydb = client.db("Hndir");
			var query = {username: req.body.Username};
			mydb.collection("Users").find(query).toArray(function(err, result) {
		    	if (err) throw err;
		    		answer = result;
		    document.getElementById('Username').value = answer.Username;	
			document.getElementById('Password').value = answer.Password;
			document.getElementById('Email').value = answer.email;
			});
	});
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