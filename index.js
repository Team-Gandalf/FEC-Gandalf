const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();

const port = 8080;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/allGames', (req, res) => {
  db.getAllGames((err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    } else {
      res.send(data);
    }
  });
});

app.get('/randomGame', (req, res) => {
  db.getAllGames((err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    } else {
      res.send(data[0]);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Serving is now listening on port: ${port}`);
});
