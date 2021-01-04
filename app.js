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
    res.send('./views/about.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname });
})