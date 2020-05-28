var converter = require('./converter');
var express = require('express');
var fs = require('fs');
var cors = require('cors')
var app = express();

app.use(cors());

var cont = 1;

app.get('/test', function (req, res) {
  res.send("Just testing "+cont);
  res.end();
});

app.get('/', function (req, res) {
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python3',["script.py", (cont % 2)]);
  cont++;
  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString())
    res.send(data.toString());
    res.end();
  });
  
});

app.listen(3000, function () {
  console.log('Server middleware listening on port 3000!');
});