// Express Hello World Example
var express = require('express');
var app = express(); // creates an Express application, which has 
// the methods for routing HTTP requests, configuring middleware (like
// app.route), rendering HTML views (like app.render) and 
// registering a template engine

// the following is a route definition
app.get('/', function(req, res) { // specifies a callback function to 
    // be invoked when there is a HTTP GET request with the specified path
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});