var sayHello = function(){
	console.log('Hello!');
}
var sayGoodbye = function(){
	console.log('Goodbye!');
}
exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;

/*All the functions that you don’t 
export in your module file will remain private. 
They won’t be able to be called for externally.
However, they will be able to be used by other 
functions within your module.*/