const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');                     //6 view engine install and require
app.use(express.static(__dirname + '/public'));      //5 add html page via static no need to write all path

app.get('/', (req, res) => {
    //  res.send('<h1>hello expres<h1>');     //1simple example 
    // res.send({
    //     name: 'manjesh',                       //2json data print 
    //     like: ['biking', 'travel']
    // });
    res.render('home.hbs',{
        pageTitle:'home page',
        welcomeMessage:'welcome to my website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {               //3 another get method  
    // res.send('about page');
    res.render('about.hbs', {                   //7 using hbs dynamic page and render it
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});


// /bad -send back json with errorMessage
app.get('/bad', (req, res) => {                      //4 another json 
    res.send({
        errorMessage: 'unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('server is up on port 3000');      //optional ony read me
});