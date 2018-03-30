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


/*MONGODB*/

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://Midri:Mmta1-49@hndirc-shard-00-00-uu47g.mongodb.net:27017,hndirc-shard-00-01-uu47g.mongodb.net:27017,hndirc-shard-00-02-uu47g.mongodb.net:27017/test?ssl=true&replicaSet=HndirC-shard-0&authSource=admin"
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//To be able to load the ejs file
app.use(express.static(path.join(__dirname, 'public')));

exports.Register = function(req, res){
	MongoClient.connect(uri, function(err, client){
			if (err) throw err;
			var mydb = client.db("Hndir");
			var query = {username: req.body.Username};
			mydb.collection("Users").find(query).toArray(function(err, result) {
		    	if (err) throw err;
		    		answer = result;		
			});
			if(answer != null || req.body.Password !== req.body.RPassword){
		    	res.writeHead(200, {"Content-Type": "text/html"});
				res.end('<p>Username already used!</p>');
				res.redirect(path.join(__dirname, 'register.js'));
		    	}
		    else{
		    mydb.collection(Users).insert({username: req.body.Username, Password: req.body.Password, email: req.body.email, Defauly_List : []});
		    }
 			client.close();
		 });

};