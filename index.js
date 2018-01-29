/*Required Modules*/
var express = require('express');
var bodyParser = require('body-parser'); 
//Not installed using npm install as it is a core module
//It is installed with Node, can be found in lib/
var path = require('path');

//initialization: doesn't have to be named as the file
var app = express();

//Args: Port to listen to, Call back fcn
 app.listen(3000, function(){
	console.log('Server Started on Port 3000....');
})