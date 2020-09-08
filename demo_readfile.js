// the file system module lets you work with the file system on 
// your computer.
// common uses include: reading, creating, updating, deleting and 
// renaming files
var fs = require('fs');

// using the demofile1.html

var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data); // displays contents of html file
        return res.end();
    });
}).listen(8080);

// for creating files, fs has fs.appendFile(), fs.open(), fs.writeFile()
// fs.appendFile() example (appends specified content to a file)

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.open() example (takes a flag as the second argument. if the flag
// is 'w' for 'writing' then the specified file is opened for writing)

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

  // fs.writeFile() example (replaces the specified file and content
  // if it exists)

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  // the file system methods for updating files are fs.appendFile()
  // and fs.writeFile()

  // the file system method for deleting files is fs.unlink(). Example:

  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  // the file system method for renaming a file is fs.rename()

  fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });