var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var app = express();
var init = require('../../test');

var db = require('../../connect');
const router = express.Router();

router.get('/', function(req, res){
	init.LoggedIn = false;
	res.render('pages/home');
	console.log("back home");
});
module.exports = router;