const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('./certificates/client-key.pem'),
  cert: fs.readFileSync('./certificates/client-cert.pem'),
  // passphrase only required if used while certificate creation
  passphrase: fs.readFileSync('./certificates/passphrase.pem').toString(),
};

https.createServer(options, app)
  .listen(8000, () => {
    console.log('Server listening on port 8000');
  });

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/dash', (req, res) => {
  res.send('welcome')
});