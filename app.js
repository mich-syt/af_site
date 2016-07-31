var express = require('express');
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

//Obsolete
// app.get("/test", function (req, res) {
// 	res.render('test', {title:'YOHO', "splash": {"base": "img/fancy.gif", "cover": "img/cover_4_blur.jpg"}, "hello": "hi"});
// }); 

app.get("/arts_market", function (req, res) {
	res.render('arts_market', {title: 'Arts Market', "splash": {"base": "img/headers/Market.jpg", "cover": "img/cover_4_blur.jpg"}});
}); 

app.get("/event", function (req, res) {
    res.render('event', {
        title: 'Events Sample', 
        "splash": {
            "base": "img/headers/Market.jpg", 
            "cover": "img/cover_4_blur.jpg",
            "title": "This is EVENT",
            "text": "Some description of the goddamn event" }})
});

app.listen(3000, function() {
    console.log("Listening at port 3000");
});

