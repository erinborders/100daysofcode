var http = require('http');

// tells the computer to write Hello World! if anyone (i.e. a web browser) 
// tries to access your computer on port 8080 (http://localhost:8080)
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);