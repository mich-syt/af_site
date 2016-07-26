var express = require('express');
var app = express();

//Static folder for all assets
app.use(express.static('public'));

app.get('/jquery/jquery.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});

app.get('/', function (req, res) {
    res.sendFile('/views/index.html', {root: __dirname});
});

app.listen(3000, function() {
    console.log("Listening at port 3000");
});

