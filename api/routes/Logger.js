var Connect = require('../../connect');

var mydb = Connect.get().db("Hndir");
var my_u_collection = mydb.collection("Users");

var Log = {
	username: null,
	userID: null,
	Alists: [],
	Mlists: [],
	LoggedIn: false,
};

//Login, 
	//If data found, set the Log variable to user details, 
	//else, return an error.
exports.SetSession = function(req, done){
	
	var query = {Username: req.body.Username, Password: req.body.Password};
		my_u_collection.find(query).toArray(function(err, result) {
	    	if (err) return done(err);
	    		//answer = result;
		    	console.log("No error... Proceeding to find results\n");
		    	 if(result.length != 0){
					Log.LoggedIn = true;
					Log.userID = result[0]._id;
					Log.username = req.body.Username;
					console.log(result);
					//var ans = (JSON.stringify(result))[0];
			    	//GIVES BACK LISTS
			    	console.log(result[0].MyLists);
			    		//Alists: Administrated Lists
			    	Log.Alists = (result[0].MyLists)[0];
			    		//MLists: Lists User is member of
			    	Log.MyLists = (result[0].MyLists)[1];
					done();
					//console.log("flag set to TRUE...\n");
					
					
		    	}
		    	else {
		    		console.log("no result: ", result);	
		    		done(err);
		    	}

		});


};

//Query to get all Lists administrated by the User
exports.getAdminLists = function(){};
//Query to get all Lists the user is member of
exports.getMemberLists = function(){};
////Query to get User ID
exports.getUserId = function(){};
exports.get= function(){
	return Log;
};
exports.AddAList= function(){};
exports.setMLists = function(){};
exports.Logout = function(){};
