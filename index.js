const express = require('express')
const app = express()
const port = 7777

app.get('/', (req, res) => {
    console.log('RACINE')
    res.send('OK')
})

app.listen(port, (err) => {
    if (err) throw err;
})
