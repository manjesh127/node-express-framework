const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')         //use to inject inside view partials  
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));           //this is use middle ware k jgah

app.use((req, res, next) => {                               //2nd this is middle warre example
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;          //this variable is pass in console and data also will print 
    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();                                               //if empty then only load browser but not open
});

app.use((req, res, next) => {
    res.render('maintainance.hbs');
});

// app.use(express.static(__dirname + '/public'));          //no working because maintainance page load at top print the page

hbs.registerHelper('getCurrentYear', () => {           //the helper is used in return copyright fullyear and define getCurrentYear in footer
    return new Date().getFullYear()                 //jo v return krayenge vo .getCurrentYear jha define h vha change hoga is date ki jagah sting return kraye to vo print hoga
});

hbs.registerHelper('screamIt', (text) => {         //define screamit to home.hbs for uppercase
    return text.toUpperCase();
});

app.get('/', (req, res) => {

    res.render('home.hbs', {
        pageTitle: 'home page',
        welcomeMessage: 'welcome to my website',
        // currentYear: new Date().getFullYear()    //this is not a good method and this is write in register helper
    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        pageTitle: 'About page',
        // currentYear: new Date().getFullYear()
    });
});



app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to handle request'
    });
});

app.listen(3001, () => {
    console.log('server is up on port 3001');
});