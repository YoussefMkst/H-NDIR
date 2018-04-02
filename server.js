/*Creates a mini web server which sends a "Hi everybody"
message in every case, regardless of the page requested. 
It is launched on the 8080 port*/

/*Required Libraries*/
/*Create WebServer:*/
const http = require('http');
const app = require('./test');
const port = process.env.PORT || 3000;

const server = http.createServer();
server.listen(port);