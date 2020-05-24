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
app.post('/audio/:userId', function(req, res) {
    // Id de l'usuari
    let userId = req.params.userId;
    console.log("Recieved audio from user: "+userId);
    // Guardem l'arxiu a ./records/userid_time.mp3 
    let writeStream = fs.createWriteStream('./records/' + userId + '_' +Date.now() + '.aac');
    req.pipe(writeStream);
    res.sendStatus(200);
})

// Ruta on retornem el json de resultats per l'user_id a ./responses/
app.get('/results/:userId', function (req, res) {
  let userId = req.params.userId;
  console.log("Results for " + req.params.userId);
  data = require('./responses/' + userId + '_res_test.json');
  res.send(data);
  res.end();
});

app.listen(3000, function () {
  console.log('Server middleware listening on port 3000!');
});

