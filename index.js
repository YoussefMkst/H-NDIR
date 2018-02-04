/*Required Modules*/
var express = require('express');
var bodyParser = require('body-parser'); 
var router = express.Router();
var User = require('C:/Users/musul/Desktop/H-NDIR/User');

//Not installed using npm install as it is a core module
//It is installed with Node, can be found in lib/
var path = require('path');

//initialization: doesn't have to be named as the file
var app = express();
//Args: Port to listen to, Call back fcn
 app.listen(3000, function(){
	console.log('Server Started on Port 3000....');
});

//Get home page
router.get('/', function(req, res, next){
	res.render('index', {title: 'Express'});
});


router.post('/register', function(req, res){
	if(req.body.email && req.body.username && req.body.password && req.body.passwordConf){
		var userdata = {
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
			passwordConf: req.body.passwordConf,
		}	
	}
	//Insert data on DB using schema.create
	User.create(userdata, function(err, User){
		if(err){
			return next(err)
		}
		else {
			//Successful Login
			return res.redirect('/profile');
		}
	});

});

module.exports = router;

	

	