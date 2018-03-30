# H-NDIR
## Day 1: Authentication
	Packages needed:
		- Express : to run the app
		- Nodemon : restarting the server whenever a change occurs 
		- Mongoose : to simplify the interaction with MongoDB
		- Bcrypt: for hashing and salting passwords
		- Express session : to handle sessions
		- Connect-Mongo : for storing sessions in MongoDB
		File: Index.js

## Day 2: Database Linking
	Mongo is a document database that stores JSON like objects,
	The Model (also called schema defines which elements are in that object)
		File created: User.js

		Our schema is written using the available one on source N1


		- Testing gave errors, and din't run register command
		- Start with another tutorial: N2

##Day3: Restart the learning from point 0 using source N3
	PT1:
	Node is a low level
	It is up to us to create the server
	Node JS is monothread: only one process and one version of the program that can be used at any one time in its memory. >> [Runs faster on one core]

	The callback function is called whenever the visitor connects to a website
	req is for request: an object containing all the information about what the visitor asked for.
	res for response: an object that we need to fill to give a response to the visitor >> the html code of the page to be sent to the visitor
	
	PT2:
	send an HTML response using write() >> follow HTTP standards

##Day4: Determine the usage of different pages
	Build skeleton only
	I have the following pages:
	Register
	Login
	Logout
	Forgot Password
	Main Page
	View Profile
	Update Profile
	MyLists
	NewList
	List[Name] (i.e ListCsc)
	MyfrequentChoices

	>> Code updated
	Params come after the pathname?
	------------------------Code Works Fine--------------------

	Listening to event: JQuery required
	JQuery : Javascript Library

##Day5: 
		Code added then removed:
		"fs.readFile('./login.html', function (err, html) {
  	 
  	if (err){throw err}
      http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
  });"

  Instead I used: Res.redirect('myURL');
  Unfortunately is gives: resredirect is not a fcn
  --------------------------
  Added: app = express();
  then
	   app.get('/', function(request,respond) {
	      respond.redirect('your_url'); //Pass between the brackets your URL.
	    });
	  Output: Gives no error but doesn't redirect


	  ----------------------------------------
	  Start from #0 of stage 3

	  Change Server by app : app.listen(3000);
	  res.sendFile('C:/Users/musul/Desktop/H-NDIR/login.html');
	  is equivalent to:
	  	res.sendFile(path.join(__dirname, 'login.html'));

	 app.post('/kutsukutsu', function(req, res){
	console.log('bjr');
	if(req.body.username === "admin" && req.body.password === "admin"){
		console.log('Mer7baaa');
	}
	});
		Return Mer7baaa  

		AJAX = Asynchronous JavaScript And XML.

##Day6:
	Restarting NodeJS work
##Day7:
	DB set.
##Day8: 
		Connect following tutorial
		Donwloaded TLS/SSL
##Day9:
 Reading I
 	(Source is resources.txt> DB3):
		- "if there are redundant copies of customer addresses in the database, an application developer could implement a customer address update function that updates all copies of an address."

		- "This process is known as denormalization. The basic idea is that data models should store data that is used together in a single data structure, such as a table in a relational database or a document in a document database."

		-"The goal is to keep data that is frequently used together in the document. This allows the document database to minimize the number of times it must read from persistent storage"

		-"To answer the question “how much denormalization is too much?” you should consider the queries your application will issue to the document database."


		>> Denormalize if two entities would be used together many times (see example 1 of order_ID and product_ID)
		>> Normalize if two related entities are used in a different manner. entity 1 is used way more frequently than entity 2.
 Reading II
 	(Source is the white paper, MongoDB)
 	  

--------STREAMS:
	Note: try using the pipe for the HTML FILE instead of redirect
##Day10:
	I have no diea what this line is for, but I added it, anyway!:
	app.use(express.static(path.join(__dirname, 'public')));
	JQUERY
	NODE
	MONGODB

##Day11:
	use modules to call files/ fcns in files
	/*
	MongoClient.connect(url, function(err, db){
		if (err) throw err;
		var mydb = db.db("H-NDIR");
		var query = {username: req.body.Username, password: req.body.Password};
		mydb.collection("Users").find(query).toArray(function(err, result){
			if(err) throw err;
			console.log('result is:'+ result.toString());
			db.close();
		});
	});*/
START OVER Following source N3
##Day12: 

Issue 1: Page didn't open .ejs file
	>> solution: create a view file, add the ejs file in it ( See N7)
Issue 2: Page loaded but doesn't read the input properly:
	>> solution: app.use(bodyParser.urlencoded({ extended: true }));

Issue 3: Database didn't link well
Solution: I had to sart the db, get my query then close it again

EXPLORING CORDOVA

##Day13:
Install Cordova 
Install phoneGAP

##Day 15
Socket io
 The client carries out 2 types of connections:

A "classic" connection to the HTTP server to load the index.html page.

A "real time" connection to open a tunnel via the WebSockets thanks to socket.io.

JS code at foor of html code. 
it could have put it in the <head> tag as many do, but placing it at the end of the HTML code avoids the loading of the JavaScript interfering with the loading of the HTML page

	Message sent to everyone = broadcast
	use socket.broadcast.emit('message', 'bla bla');
 Mongodb connected as shell before 3.4 
 mongodb://Midri:<PASSWORD>@hndirc-shard-00-00-uu47g.mongodb.net:27017,hndirc-shard-00-01-uu47g.mongodb.net:27017,hndirc-shard-00-02-uu47g.mongodb.net:27017/test?ssl=true&replicaSet=HndirC-shard-0&authSource=admin


 ANDROID EMULATOR DOESN'T RUN.....

 Next Steps:
 - Code .js and their equivalent .ejs files without CSS
 	* register.js >> register.ejs
 	* Profile.js >> Profile.ejs
 	* my Lists.js >> myList.ejs
 	* ChangePassword.js >> ChangePassword.ejs
 	* Unsubscribe.js >> Unsubscribe.ejs
 	* Logout.js >> Logout.ejs
 	* ContactUs.js >> ContactUs.ejs


 	Solve issue of Login, Not authenticating properly!!

 	ASYNCHRONICITY:
 		Solved by including the iff in the callback function of the query.

##Day16 :
Install npm install -g wait-for-mongo
Install npm install --save wait-for-mongo

Updated Mongodb using: npm install mongodb

HAD ERROR OF NO BSON FILE FOR MONGOWAIT:
COpied file from wait-for-mongo/browser-build
and pasted at wait-for-mongo/build/release
 		
Update utils.js in mongodb/lib/utils.js
following the instructions in: 
https://github.com/mongodb/node-mongodb-native/pull/1653/commits/e318dfa30114b8cf2951e7ac72b5daf70b9bed24


##DAY 17 :
Issue was concerning routes and mongo db connection.
Code copied from source M5.


Issue: done is not a function

Solution: >> Steps followed are below:
	-add  var db = require('../../connect'); to all files reading from db
	-after the app declares listening to port 8080, close it and write the app.use and environment setting functions after.
	-Remove db.close() from the end of file

	The exact step that solved the issue isn't known.

Issue: router.use() requires middleware function but found null
Solution: I had to export only the router as modules.exports = router.

