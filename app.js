const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);
app.set('view engine', 'ejs');

app.use((req, res) => {
    console.log('new request made: ');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
})

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'lorem ipsum dolor sit amet consectetur'},

    ];
    res.render('index', {title:"Home", blogs});
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