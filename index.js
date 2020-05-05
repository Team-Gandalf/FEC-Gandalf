const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();

const port = 8080;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/randomGame', (req, res) => {
  db.getAllGames((err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    } else {
      const len = data.length;
      const random = Math.floor(Math.random() * len);
      res.send(data[random]);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Serving is now listening on port: ${port}`);
});
