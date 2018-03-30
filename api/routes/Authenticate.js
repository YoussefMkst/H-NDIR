

/**********************AUTHENTICATION*********************/	
	console.log("TEST: BEFORE JQUERY METHOD");
	$(document).ready(function(){
		
		$('submit').on('click', function(){
			MongoClient.connect(url, function(err, db){
				if (err) throw err;
				var mydb = db.db("H-NDIR");
				var query = {username: $(".Username").text(), password: $(".Password").text()};
				mydb.collection("Users").find(query).toArray(function(err, result){
					if(err) throw err;
					console.log('here');
					db.close();
				});
			});
		});
	});