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

##Day4: Dtermine the usage of different pages
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
