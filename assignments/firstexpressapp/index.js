const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000')
})

// if a dependency is only used during development, save it as a 
// development dependency (so that your package users don't have to)
// install it in production

// do this by using the command npm install <program name> --save-dev

// linters are tools that perform static state analysis on
// software to recognise and report adherence/non adherence to 
// coding best practices