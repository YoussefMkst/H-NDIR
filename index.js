/*Required Modules*/
var express = require('express');
var bodyParser = require('body-parser'); 
var router = express.Router();
var User = require('C:/Users/musul/Desktop/H-NDIR/User');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var events = require('events');
var uri = "mongodb://Midri:Mmta1-49@gettingstarted-shard-00-00-hyjsm.mongodb.net:27017,gettingstarted-shard-00-01-hyjsm.mongodb.net:27017,gettingstarted-shard-00-02-hyjsm.mongodb.net:27017/test?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin";


var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
var path = require('path');
/*--------------------------CONSTRUCT HTTP SERVER-------------------*/
//1. call Library
var http = require('http');
//for url
var url = "mongodb://localhost:27017/";


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

//Parse user input into queries
var querystring = require('querystring');

app.get('/login', function(req, res){
	// to redirect to request: res.redirect('login.html');	
	res.sendFile(path.join(__dirname, 'login.html'));

	console.log('olele');
});

app.post('/submit', function(req, res){
	//Username as written in the html file
	console.log(req.body.Username);
	
	res.send(req.body);
});


/*----------MY CASES----------*/
/*  
    Register
	Login
	Logout
	Forgot Password
	Main Page
	View Profile
	Update Profile
	MyLists
	NewList
	List[Name] (i.e ListCsc)
	MyfrequentChoices
*/
/*
if(page == '/'){



}); //END OF SERVER CALL BACK FCN
*/

 //3. Server launched and listens to the port 3000
// avoid port 80: already used by computer
 app.listen(3000, function(req,res){
 	console.log('Server App on Port 3000....');
 });


