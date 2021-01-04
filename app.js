const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('index');
});


app.get('/about', (req, res) => {

    //res.send('<p>about page</p>');
});