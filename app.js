var express = require('express');
var app = express();

//Static folder for all assets
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('/views/index.html', {root: __dirname});
});

app.listen(3000, function() {
    console.log("Listening at port 3000");
});