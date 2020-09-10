var express = require('express')
var path = require('path')
var app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname, 'files')))

app.get('/', (req, res) => {
    res.sendFile('files/index.html')
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'files/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'files/about.html'))
})

app.get('/contactme', (req, res) => {
    res.sendFile(path.join(__dirname, 'files/contact-me.html'))
})

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/files/404.html'))
    // have to put another / otherwise there's no /between root of site
    // and prefix
})

app.listen(8000, () => {
    console.log('Basic express app listening on port 8000')
})