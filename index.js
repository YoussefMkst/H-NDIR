/*Required Modules*/
var express = require('express');
var bodyParser = require('body-parser'); 
var router = express.Router();
var User = require('C:/Users/musul/Desktop/H-NDIR/User');


/*--------------------------CONSTRUCT HTTP SERVER-------------------*/
//1. call Library
var http = require('http');
//for url
var url = require('url');



 // 2. Create Server
var server = http.createServer(function(req, res){
	var page = url.parse(req.url).pathname;
	console.log(page);

	//Response
	//code 200 = Everything is fine so html page can be received
	//content-type = to indicate the MIME type for the html response
	res.writeHead(200, {"content-type": "text/html"});
	// ending the response- printed on website
	res.write('Hello Node again!');

	/*res.end('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>My Node.js page!</title>'+
' </head>'+ 
' <body>'+
' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
' </body>'+
'</html>');*/
}); 

 //3. Server launched and listens to the port 3000
// avoid port 80: already used by computer
 server.listen(3000);


