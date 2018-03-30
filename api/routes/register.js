var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var http = require('http');
//var uri = "mongodb+srv://Midri:Mmta1-49@cluster0.mongodb.net/test";
var waitForMongo = require('wait-for-mongo');
var Sync = require('sync');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var app = express();
var events = require('events');
var Connect = require('../../connect');
var mongoose = require( 'mongoose');

const router = express.Router();
app.set('view engine', 'ejs');
//SOLVE ERROR OF REDIRECT
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://Midri:Mmta1-49@hndirc-shard-00-00-uu47g.mongodb.net:27017,hndirc-shard-00-01-uu47g.mongodb.net:27017,hndirc-shard-00-02-uu47g.mongodb.net:27017/test?ssl=true&replicaSet=HndirC-shard-0&authSource=admin"


/*MONGODB*/


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//To be able to load the ejs file
app.use(express.static(path.join(__dirname, 'public')));


router.get('/', function(req,res){
	res.render('../views/pages/register');
	console.log("within register");
});

router.post('/', function(req, res){


	try{
	var c = Connect.Connexion(req, res);
	

	//To wait for DB to connect
	setTimeout(function DBWORK(){	
		var mydb = Connect.db;
		var query = {Username: req.body.Username};
		var query2 ={email: req.body.email};

				//QUERY FOR EMAIL ONLY
	 mydb.collection("Users").find(query2).toArray(function(err, result) {
	    	if (err) {
	    		throw err;
	    		console.log(err);
	    	}
	    	console.log('checking email now...');
	    	console.log(result);
	    	if (result.email === req.body.email){
	    			res.send('email already associated to an account');
	    			 res.render('../views/pages/register');
	    			 
	    			 return;
	    			
	    	}
	    	

	    });
	   
	    	//QUERY FOR USERNAME
		mydb.collection("Users").find(query).toArray(function(err, Result) {
				if (err) {
					throw err;
	    			console.log(err);
	    	}
				console.log('checking Username now...');
				console.log(Result);
				res.render('../views/pages/register');
				
				//IF USERNAME ALREADY EXISTS
				if(Result.Username === req.body.Username){
					//res.writeHead(200, {"Content-Type": "text/html"});
					//res.end('<p>Username already used!</p>');
					//res.end();
					res.render('../views/pages/register');
					return;
					
				}
				//IF ENTERED PASSWORDS DON'T MATCH	
				else if(req.body.Password !== req.body.RPassword){
			    	res.writeHead(200, {"Content-Type": "text/html"});
					//res.end('<p>Passwords do not match</p>');
					
					res.render('../views/pages/register');
					return;
					
				}
				
			});
				
		 mydb.collection("Users").insert({'Username': req.body.Username, 'Password': req.body.Password, 'email': req.body.email, 'Default_List': []}, {}, function(err, res){
					if (err) {
						throw err;
						console.log(err);
					}
					console.log("1 document inserted");
	}, 10000);
    						
					
 	});	
 	res.render('../views/Pages/login');
 }catch (e){
 	console.log(e);
 }
});	


module.exports = router;  
