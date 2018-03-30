const express = require('express');
const router = express.Router();


router.post('/PasswordChanged', function(req, res){
	//Implement The routing here.

	res.setHeader('Content-Type', 'text/plain');
	res.end('myLists');

});
module.exports= router;