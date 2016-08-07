var express = require('express');
var workshops = require('./workshops');
var exhibitions = require('./exhibitions');
var app = express();

//Static folder for all assets
app.use(express.static('public'));
app.set('view engine', 'pug'); 

app.get('/jquery/jquery.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});

app.get('/', function (req, res) {
    res.render('index.pug', {title:'Arts Fest 2016', "splash": {"base": "img/fancy.gif", "cover": "img/cover_4_blur.jpg"}});
});

app.get("/venues", function(req, res) {
    res.render('venues');
});

app.get("/contact", function(req, res) {
    res.render('contact');
});

app.get("/support", function(req, res) {
    res.render('support');
});


app.get("/calender", function(req, res) {
    res.render('calender');
});


app.get("/cinema", function(req, res) {
    res.render('cinema');
});

app.get("/workshop/:event", function(req, res) {
    res.render('exhibition', workshops[req.params.event]);
});

app.get("/exhibition/:event", function(req, res) {
    res.render('event', exhibitions[req.params.event]);
});
app.get("/arts_market", function (req, res) {
	res.render('arts_market', {title: 'Arts Market', splash: {base: "img/headers/Market.jpg", cover: "img/cover_4_blur.jpg"}});
}); 

app.get("/event", function (req, res) {
    res.render('event', {
        title: 'Events Sample', 
        "splash": {
            "base": "img/headers/Market.jpg"
        }})
});

app.listen(3000, function() {
    console.log("Listening at port 3000");
});

