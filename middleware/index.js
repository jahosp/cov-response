/*
cov-response-middleware
*/
const Converter = require('./converter');
const express = require('express');
const fs = require('fs');
const speech = require('@google-cloud/speech');
const cors = require('cors')
const app = express();

const converter = new Converter();

app.use(cors());

app.get('/', function (req, res) {
  res.send("I'm alive");
  res.end();
});

// Ruta on rebem els clips d'audio de l'app
app.post('/audio/:userId', function(req, res) {
    // Id de l'usuari
    let userId = req.params.userId;
    console.log("> Recieved audio from user "+ userId);

    // Guardem l'arxiu a ./records/ fent servir l'userId i el temps 
    let filename = userId + '_' + Date.now() + '.aac';
    let pathToFile = './records/' + filename;

    let writeStream = fs.createWriteStream(pathToFile);
    req.pipe(writeStream);
    res.sendStatus(200);
    // Convertim l'audio a FLAC 
    converter.convert(filename, convertSpeechToText);
})

// Ruta on retornem el json de resultats per l'user_id a ./responses/
app.get('/results/:userId', function (req, res) {
  let userId = req.params.userId;
  console.log("> Handing Results for " + req.params.userId);
  data = require('./responses/' + userId + '_history.json');
  res.send(data);
  res.end();
});

app.listen(3000, function () {
  console.log('Server middleware listening on port 3000!');
});

// Enviem l'audio de la consulta a la API d'Speech-To-Text
async function convertSpeechToText(filename) {
  const client = new speech.SpeechClient();

  const file = fs.readFileSync(filename);
  const audioBytes = file.toString('base64');
  const audio = {
    content: audioBytes
  };
  const config = {
    encoding: 'FLAC',
    languageCode: 'en-US'
  };
  const request = {
    audio: audio,
    config: config
  };
  const [response] = await client.recognize(request);
  const transcription = response.results.map(result => 
    result.alternatives[0].transcript).join('\n');

    console.log("> Transcribed audio as: " + transcription);

  addTranscriptionToHistory(filename, transcription);
}

// Creem una nova entrada a l'historial de l'usuari amb la seva pregunta (./responses/)
function addTranscriptionToHistory(filename, transcription) {
    let userId = filename.split('/')[3].split('_')[0];
    let requestId = filename.split('_')[1].split('.')[0];
    fs.readFile('./responses/'+ userId + '_history.json', function cb(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        obj.history.push({
          id_response : requestId,
          responseTitle : "Your question",
          questionText : transcription,
          responseText : "Analyzing..."
        });
        json = JSON.stringify(obj);
        fs.writeFile('./responses/'+ userId + '_history.json', json, () => {
            console.log("> Added question in user's history")
        });
      }
    })
}

// Actualitza l'historial de l'usuari amb la resposta del sistema
// **TODO** Falta revisar parametres
function addAnswerToHistory(filename, answer) {
  let userId = filename.split('/')[3].split('_')[0];
  let requestId = filename.split('_')[1].split('.')[0];
  fs.readFile('./responses/'+ userId + '_history.json', function cb(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      
      let recordIndex = obj.history.findIndex(record => record.id_response == requestId);
      obj.history[recordIndex].responseText = answer;

      json = JSON.stringify(obj);
      fs.writeFile('./responses/'+ userId + '_history.json', json, () => {
          console.log("> Added answer in user's history")
      });
    }
  })
}