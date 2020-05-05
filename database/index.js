const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/fec', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Connection Failed: ', err);
});

db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Successfully connected to MongoDB');
});

const announcementsSchema = new Schema({
  title: String,
  postDate: Date,
  body: String,
  category: String,
  url: String,
  thumbnailUrl: String,
});

const commentSchema = new Schema({
  username: String,
  postDate: Date,
  commentBody: String,
});


const gameSchema = new Schema({
  name: { type: String, unique: true },
  image: String,
  title: String,
  likes: Number,
  commentCount: Number,
  announcements: [announcementsSchema],
  comments: [commentSchema],
  url: String,
  rateUp: Boolean,
  rateDown: Boolean,
});

const Game = mongoose.model('games', gameSchema);

module.exports = {
  Game,
  getAllGames: (callback) => {
    module.exports.Game.find((err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
};
