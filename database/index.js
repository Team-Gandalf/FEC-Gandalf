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
  rateUp: Boolean,
  rateDown: Boolean,
  commentCount: Number,
  likes: Number,
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
  announcements: [announcementsSchema],
  url: String,
});

const Game = mongoose.model('games', gameSchema);

module.exports = {
  Game,
  getAllGames: (callback) => {
    Game.find((err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  getGame: ({ _id }, callback) => {
    Game.findOne({ _id }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  getAnnouncement: ({
    gameId, announcementId, rateUp, rateDown,
  }, callback) => {
    Game.findOneAndUpdate({ 'announcements._id': announcementId }, { $set: { 'announcements.$.rateUp': rateUp, 'announcements.$.rateDown': rateDown }, $inc: {'announcements.$.likes': 1 } }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
};
