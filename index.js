/*Required Modules*/
var express = require('express');
var bodyParser = require('body-parser'); 
var router = express.Router();
var User = require('C:/Users/musul/Desktop/H-NDIR/User');
var app = express();
var path = require('path');
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
/*--------------------------CONSTRUCT HTTP SERVER-------------------*/
//1. call Library
var http = require('http');
//for url
var url = require('url');


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
	var name = req.body.username+' '+ req.body.password;
	res.send("Welcome");
	});

/* // 2. Create Server
var server = http.createServer(function(req, res){
	res.writeHead(200, {"content-type": "text/html"});
	var page = url.parse(req.url).pathname;

	console.log(page);

	
	//Response
	//code 200 = Everything is fine so html page can be received
	//content-type = to indicate the MIME type for the html response
	
	

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


