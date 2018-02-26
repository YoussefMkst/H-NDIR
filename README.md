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

 