/*
cov-response-middleware
*/
var converter = require('./converter');
var express = require('express');
var fs = require('fs');
var cors = require('cors')
var app = express();

app.use(cors());

app.get('/', function (req, res) {
  data = require('./responses/res_test.json');
  res.send(data);
  res.end();
});

// Ruta on rebem els clips d'audio de l'app
app.post('/audio/:user_id', function(req, res) {
    // Id de l'usuari
    let user_id = req.params.user_id;
    console.log("Recieved audio from user: "+ user_id);
    // Guardem l'arxiu a ./records/userid_time.mp3 
    let writeStream = fs.createWriteStream('./records/' + user_id + '_' +Date.now() + '.aac');
    req.pipe(writeStream);
    res.sendStatus(200);
})

app.listen(3000, function () {
  console.log('Server middleware listening on port 3000!');
});

