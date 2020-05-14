/*
cov-response-middleware
*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('TBD');
});

app.listen(3000, function () {
  console.log('Server middleware listening on port 3000!');
});

