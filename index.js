const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();

const port = 8080;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/game', (req, res) => {
  db.getAllGames((err, data) => {
    if (err) {
      console.error('ERROR: ', err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Serving is now listening on port: ${port}`);
});
