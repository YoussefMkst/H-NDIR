var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var http =require('http');
//var uri = "mongodb+srv://kay:Mmta1-49@hndir.mongodb.net/test";
var init = require('../../test');
var mongoose = require( 'mongoose');


var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var events = require('events');
var querystring = require('querystring');
var Username = null;
var Password = null;
//var uri = "mongodb://localhost:27017/";
//var uri = "mongodb://Midri:Mmta1-49@hndirc-shard-00-00-uu47g.mongodb.net:27017,hndirc-shard-00-01-uu47g.mongodb.net:27017,hndirc-shard-00-02-uu47g.mongodb.net:27017/test?ssl=true&replicaSet=HndirC-shard-0&authSource=admin"

var ID = null;
var db = require('../../connect');
const router = express.Router();


router.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/views/pages/login.html'));
	console.log("within login");
});

router.post('/', function(req, res){
	var Logger = require('./logger');
			//db is open in connect.js, and exported in test.js files
			//var mydb = db.get().db("Hndir");
	Logger.SetSession(req, function(err){
		console.log('Back to Login');
		console.log(Logger.get().LoggedIn);
		if(Logger.get().LoggedIn){
			res.sendFile(path.join(__dirname+'/views/pages/Profile.html'));
			
		}
		else
		{
			console.log('../pages/login');
			res.sendFile(path.join(__dirname+'/views/pages/login.html'));
			
			
			
		}
			
	});
});
	

module.exports = router;
//module.exports = ID;
//exports.mydb = mydb;
//exports.client = client;
//exports.query = query;