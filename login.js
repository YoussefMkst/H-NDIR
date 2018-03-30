var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var http =require('http');
//var uri = "mongodb+srv://kay:Mmta1-49@hndir.mongodb.net/test";
var init = require('/test');

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

var uri = "mongodb://Midri:Mmta1-49@hndirc-shard-00-00-uu47g.mongodb.net:27017,hndirc-shard-00-01-uu47g.mongodb.net:27017,hndirc-shard-00-02-uu47g.mongodb.net:27017/test?ssl=true&replicaSet=HndirC-shard-0&authSource=admin"
exports.Authenticate = function(req, res){
	var answer;
		MongoClient.connect(uri, function(err, client){
			if (err) throw err;
			var mydb = client.db("Hndir");
			var query = {username: req.body.Username, password: req.body.Password};
			mydb.collection("Users").find(query).toArray(function(err, result) {
		    	if (err) throw err;
		    		answer = result;		
			});
			if(answer != null){
				init.LoggedIn = true;
		    	res.redirect('/Profile');

		    	}
		    else{

		    	res.redirect('/login');
		    }
 			
		 });
	};

exports.mydb = mydb;
exports.client = client;
exports.query = query;