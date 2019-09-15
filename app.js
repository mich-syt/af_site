var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var workshops = require('./data/workshops');
var arts_market = require('./data/arts_market');
var exhibitions = require('./data/exhibitions');
var support = require('./data/support');
var cinema = require('./data/cinema');
var performances = require('./data/performances');

var app = express();

//Set favicon icon path
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicons', 'favi.ico')));
//Static folder for all assets
app.use(express.static('public'));
//Set view engine
app.set('view engine', 'pug'); 

app.get('/', function (req, res) {
    res.render('index.pug', {title:'Arts Fest 2016', "splash": {"base": "img/headers/headergif.gif", "cover": "img/cover_4_blur.jpg"}});
});

app.get("/workshop/:event", function(req, res) {
    res.render('workshop', workshops[req.params.event]);
});

app.get("/venues", function(req, res) {
    res.render('venues');
});

app.get("/contact", function(req, res) {
    res.render('contact', {title: 'Contact Us', splash: "/img/headers/Contact.jpg"});
});

app.get("/support", function(req, res) {
    res.render('support', {title: 'Special Thanks', splash: "/img/headers/Credits.jpg", data: support});
});

app.get("/performances", function(req,res) {
	res.render('performances', {title: 'Performances', splash: "/img/headers/Performances.jpg", data: performances}); 
});

app.get("/calendar", function(req, res) {
    res.render('calendar', {title: 'Calendar', splash: "/img/headers/officialschedule.jpg"});
});

app.get("/arts_market", function(req, res) {
	res.render('arts_market', {title:'Arts Market', splash: "/img/headers/Market.jpg", data: arts_market});
});

app.get("/cinema", function(req, res) {
    res.render('cinema', {title: 'Cinema', splash: "/img/headers/FilmScreeningAndDiscussion.jpg", data: cinema});
});

app.get("/exhibition/:event", function(req, res) {
    res.render('exhibition', exhibitions[req.params.event]);
});

app.get("/perfnew", function(req, res) {
    res.render('perfnew', {title: 'Performances', splash: "/img/headers/Performances.jpg", data: performances});
})

app.listen(3000, function() {
    console.log("Listening at port 3000");
});

