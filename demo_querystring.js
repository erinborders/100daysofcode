// there are built in modules to split the query string into readable parts
// like the url module
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; // look through url for queries
    var text = q.year + " " + q.month;
    res.end(text);
}).listen(8080);