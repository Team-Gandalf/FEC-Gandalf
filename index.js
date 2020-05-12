/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/randomGame', (req, res) => {
  db.getAllGames((err, data) => {
    if (err) {
      res.send(400);
    } else {
      const len = data.length;
      const random = Math.floor(Math.random() * len);
      res.send(data[random]);
    }
  });
});

app.get('/getGame', (req, res) => {
  let { _id } = req.query;

  // workaround for a supertest GET request
  // supertest query data is stored at req.body
  if (_id === undefined) {
    _id = req.body._id;
  }

  db.getGame({ _id }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      res.send(data);
    }
  });
});

app.patch('/updateLikes', (req, res) => {
  const {
    gameNumber, announcementId, rateUp, rateDown,
  } = req.body;
  db.updateAnnouncement({
    gameNumber, announcementId, rateUp, rateDown,
  }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      db.getGame({ _id: gameNumber }, (err, data) => {
        if (err) {
          res.send(400);
        } else {
          res.send(data);
        }
      });
    }
  });
});

// const port = 8080;

// app.listen(port, () => {
//   console.log(`Serving is now listening on port: ${port}`);
// });

module.exports = app;
