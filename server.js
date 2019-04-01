const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');                     
app.use(express.static(__dirname + '/public'));      

app.get('/', (req, res) => {
    //  res.send('<h1>hello expres<h1>');     
    // res.send({
    //     name: 'manjesh',                     
    //     like: ['biking', 'travel']
    // });
    res.render('home.hbs',{
        pageTitle:'home page',
        welcomeMessage:'welcome to my website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {              
    // res.send('about page');
    res.render('about.hbs', {                   
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});


// /bad -send back json with errorMessage
app.get('/bad', (req, res) => {                      
    res.send({
        errorMessage: 'unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('server is up on port 3000');      
});
