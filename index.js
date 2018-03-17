const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
const port = 7777;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/ressources', express.static('ressources'))
app.use('/js', express.static('js'))
app.use('/css', express.static('css'))

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.listen(port, (err) => {
    if (err) throw err;
})
