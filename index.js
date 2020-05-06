/* eslint-disable no-console */
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
      console.error('ERROR: ', err);
      res.send(400);
    } else {
      const len = data.length;
      const random = Math.floor(Math.random() * len);
      res.send(data[random]);
    }
  });
});

app.get('/getGame', (req, res) => {
  const { _id } = req.query;
  db.getGame({ _id }, (err, data) => {
    if (err) {
      console.error('ERROR: ', err);
      res.send(400);
    } else {
      res.send(data);
    }
  });
});

app.put('/updateLikes', (req, res) => {
  const {
    gameId, announcementId, rateUp, rateDown,
  } = req.body;
  console.log(gameId, announcementId, 'rateUp: ', rateUp, 'rateDown: ', rateDown);
  db.getAnnouncement({
    gameId, announcementId, rateUp, rateDown,
  }, (err, data) => {
    if (err) {
      console.error('ERROR: ', err);
      res.send(400);
    } else {
      db.getGame({ _id: gameId }, (err, data) => {
        if (err) {
          console.error('ERROR: ', err);
          res.send(400);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Serving is now listening on port: ${port}`);
});
