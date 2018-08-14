var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var state = {
	db: null,
};

exports.Connexion = function(uri, done){
	if (state.db) return done();
	/**
	* Used to Define a connection if only once database is to be used
	* @param: {Link as string}
	*/
	MongoClient.connect(uri, function (err, client) {
		console.log('MongoClient function working....');
  		if (err) return done(err);
  		state.db = client;
  		done();
	
	
	});
};

exports.get = function(){
	return state.db;
};

exports.close = function(done){
	if (state.db){
		state.db.close(function(err, result){
			state.db = null;
			state.mode = null;
			done(err);
		});
		
	}
};
//Close Connect function
