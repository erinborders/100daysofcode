var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The current date and time are: ' + dt.myDateTime());
    res.end();
}).listen(8080);

// initiate node files by running the command node <file path> in 
// terminal
