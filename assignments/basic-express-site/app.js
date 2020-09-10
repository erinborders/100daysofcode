var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/', (req, res) => {
//     res.sendFile('index.html')
// })

// app.get('/index', (req, res) => {
//     res.sendFile('index.html')
// })

// app.get('/about', (req, res) => {
//     res.sendFile('about.html')
// })

// app.get('/contactme', (req, res) => {
//     res.sendFile('contact-me.html')
// })

// app.use(function (err, req, res, next) {
//     res.sendFile('404.html')
// })

app.listen(8000, () => {
    console.log('Basic express app listening on port 8000')
})