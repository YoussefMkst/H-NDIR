/*Creates a mini web server which sends a "Hi everybody"
message in every case, regardless of the page requested. 
It is launched on the 8080 port*/

/*Required Libraries*/
/*Create WebServer:*/
var http =require('http');
var url = require("url");
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');

//Not ./mymodule.js
var mymodule = require('./mymodule');

var game = new EventEmitter();
/*function to be run when a visitor connects to our website*/
var server = http.createServer(function(req, res){
	var page = url.parse(req.url).pathname;
	/*Get URL params and divide them*/
	var params = querystring.parse(url.parse(req.url).query);
	console.log(page);

	/*callback takes two args:
	req: What the visitor asked for it contains:
		*page name
		*settings
		*fields filled in a form
	res: object to fill to give a response to the visitor
		i.e html code to the page to be sent to the visitor
	*/

	/*tell the server it's OK and response MIME type*/
	res.writeHead(200,{"Content-Type":"text/plain"});
	 if ('firstname' in params && 'lastname' in params) {
        res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
    }
    else {
        res.write('You do have a first name and a last name, don\'t you?');
    }
   

	/*must always be called last to complete the response
	 and ensure that the server sends the result to the client.*/
	res.end();
}); //close callback fcn
server.listen(8080);