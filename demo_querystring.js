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

// parse an address with url.parse() and it'll return a URL object
// with each part of the address as properties:

var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(address, true);

console.log(q.host); // returns 'localhost:8080
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february'

var qdata = q.query; // returns { year: 2017, month: 'february'}
console.log(qdata.month); // returns 'february'