const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('index', {title:"Home"});
});


app.get('/about', (req, res) => {
    res.render('about',{ title:"About"});
});

app.get('/blogs/create', (req, res) => {
    res.render('create' ,{title: "Create Blog"});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404');
});