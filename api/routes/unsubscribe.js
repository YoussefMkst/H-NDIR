var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var app = express();
var init = require('../../test');

var db = require('../../connect');
const router = express.Router();

router.get('/', function(req, res){
	

	//Render unsubscribe page
	res.render('pages/unsubscribe');
});

router.post('/', function(req, res){
			var mydb = db.get().db("Hndir");
			var mycollection = mydb.collection("Users");
			var query = {Email: req.body.email};
			mycollection.remove(query).toArray(function(err, result) {
		    	if (err) throw err;
		    	console.log('unsubscribed user');
		    });
		    res.render('pages/home');
			console.log("back home");

});
module.exports = router;