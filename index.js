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

//Parse user input into queries
var querystring = require('querystring');

 // 2. Create Server
var server = http.createServer(function(req, res){

	var page = url.parse(req.url).pathname;
	console.log(page);

	//Response
	//code 200 = Everything is fine so html page can be received
	//content-type = to indicate the MIME type for the html response
	res.writeHead(200, {"content-type": "text/html"});
	

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

if(page == '/'){
	res.write('HERE ASK USER TO REGISTER, LOGIN, or REMEMBER PASSWORD')
}
else if (page =='/register'){

	res.write('HERE AUTHENTICATION')

	//Params come after the pathname?
	var param = querystring.parse(url.parse(req.url).query);
	var Name = param['Username'];
	var email = param['email'];
	if(param['password'] === param['passwordConf'])
		var password = param['password'];
	else
		res.write('PASSWORDS DO noT MATCH');
		//Page must be reloaded
}
else if (page =='/login'){
	res.write('HERE AUTHENTICATION');
}
else if (page =='/logout'){
	res.write('LOGGED OUT');
}
else if (page =='/forgotpassword'){
	res.write('ENTER EMAIL, SEND DETAILS TO EMAIL IF IN DB');
}
else if (page =='/mainpage'){
	res.write('LINKS TO ALL OTHER VIEWS');
}
else if (page =='/viewprofile'){
	res.write('NAME, EMAIL, PHONE NUMBER, COUNTRY, LOCATION, CHANGE INFO');
}
else if (page =='/updateprofile'){
	res.write('NAME, EMAIL, PHONE NUMBER, COUNTRY, LOCATION, SAVE');
}
else if (page =='/myLists'){
	res.write('LINK TO EACH EXISTING LIST, LINKS ON DB');
}
else if (page =='/newList'){
	res.write('CREATE NEW LINK AND SAVE TO DB');
}
else if (page =='/list[name]'){
	res.write('WHEN WE OPEN THE List, WHAT CAN WE DO?');
}
else if (page =='/myfrequentchoices'){
	res.write('DROP DOWN LIST ELEMENTS');
}
// ending the response- printed on website
res.end();
	




}); //END OF SERVER CALL BACK FCN


 //3. Server launched and listens to the port 3000
// avoid port 80: already used by computer
 server.listen(3000);


