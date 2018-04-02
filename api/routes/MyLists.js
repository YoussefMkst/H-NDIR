var init = require('../../test');
var dbfile = require('./login');
var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var app = express();


const router = express.Router();
const mydb = init.db;
const ID = init.ID;
			


/*******************GENERAL FUCNTIONALITIES*/
router.get('/', function(req, res){
	//DISPLAY LISTS IN CATEGORIES/
	//CAT 1: ADMIN
	//CAT 2: NOT ADMIN
	mydb.collection("Lists").find({'_id': ID }, {'MyLists': 1});
});


router.get('/createList',function(req, res){ 
	//Render page that shows:
	/* List Name
	   List Members
	   Add Items */
});
router.post('/myLists',function(req, res){ 
//Show all Lists including the new one
});
/*****************ADMIN FUCNTIONALITIES*****************/
router.post('/Admin/listnum', function(req, res){
	const id = req.params.listnum;

	if(isNaN(req.params.listnum) ){
		res.send(404, 'Page cannot be found!');
	} 
	// ELSE IF THE ID > NUMBER OF LISTS THE USER HAS....
		//GENERATE ERROR
	else{
		//Display List
	}

	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});
router.patch('/Admin/listnum', function(req, res){
	const id = req.params.listnum;

	if(isNaN(req.params.listnum) ){
		res.send(404, 'Page cannot be found!');
	} 
	// ELSE IF THE ID > NUMBER OF LISTS THE USER HAS....
		//GENERATE ERROR
	else{
		//Display List
	}

	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});


router.delete('/Admin/listnum', function(req, res){
	const id = req.params.listnum;

	if(isNaN(req.params.listnum) ){
		res.send(404, 'Page cannot be found!');
	} 
	// ELSE IF THE ID > NUMBER OF LISTS THE USER HAS....
		//GENERATE ERROR
	else{
		//Delete List
	}

	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});


/***************NOT ADMIN***************/
router.post('/listnum', function(req, res){
	const id = req.params.listnum;

	if(isNaN(req.params.listnum) ){
		res.send(404, 'Page cannot be found!');
	} 
	// ELSE IF THE ID > NUMBER OF LISTS THE USER HAS....
		//GENERATE ERROR
	else{
		//Display List
	}

	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});
router.patch('/listnum', function(req, res){
	const id = req.params.listnum;

	if(isNaN(req.params.listnum) ){
		res.send(404, 'Page cannot be found!');
	} 
	// ELSE IF THE ID > NUMBER OF LISTS THE USER HAS....
		//GENERATE ERROR
	else{
		//Display List
	}

	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});

module.exports = router;
// Show lists
//Create/Delete/Update Lists(if Admin)