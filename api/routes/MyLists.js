var init = require('../../test');
var dbfile = require('./login');
var express = require('express'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var path = require('path');
var app = express();


const router = express.Router();

/*****************************RENDER HTML*/			

/*******************GENERAL FUCNTIONALITIES*/
router.get('/', function(req, res){
	res.render("MyLists.html");
	console.log("within My lIsts");
});


router.get('/createList',function(req, res){ 

	//Render page that shows:
	/* List Name
	   List Members
	   Add Items */
});
router.post('/myLists',function(req, res){ 
	var Logger = require('./Logger');
	var i = 0;
	var N_Mlist = "<ol id = 'inner2'>";
	var N_Alist = "<ol id = 'inner1'>";
	//Create HTML code for MEMBER List
	for(i = 0; i < Logger.get().Mlists.length; i++){

		//append i+1 as index, will become link to which list to access
		N_Mlist = N_Mlist.concat("<button href='/Member/");
		N_Mlist= N_Mlist.concat((i+1).toString());
		N_Mlist= N_Mlist.concat("'>");
		N_Mlist= N_Mlist.concat((Logger.get().Mlists[i])[0]);
		N_Mlist= N_Mlist.concat("</button>");

	}
	N_Mlist.concat("</ol>");

	//Create HTML code for ADMIN List
	for(i = 0; i < Logger.get().Alists.length; i++){

		//append i+1 as index, will become link to which list to access
		N_Alist= N_Alist.concat("<button href='/Admin/");
		N_Alist= N_Alist.concat((i+1).toString());
		N_Alist= N_Alist.concat("'>");
		N_Alist= N_Alist.concat((Logger.get().Alists[i])[0]);
		N_Alist= N_Alist.concat("</button>");

	}
	N_Alist.concat("</ol>");
	jQuery(function($){
		$(document).ready(function(){
			$('.admin').on('click', 'button', function(){
				$('this').append(N_Alist);
				$('this').remove();

			});
			

			$('.member').on('click','button',function(){
				$('this').append(N_Mlist);
				$('this').remove();
			});
		});
});
//Show all Lists including the new one
});

router.post('/Admin',function(req, res){ 
	res.render("/pages/MyLists.ejs");
	console.log("within My lIsts");
	
	res.render("pages/MyLists");
	console.log("within My Lists");

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
