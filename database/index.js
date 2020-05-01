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

const commentSchema = new Schema({
  username: String,
  postDate: Date,
  commentBody: String,
});

const gameSchema = new Schema({
  name: { type: String, unique: true },
  image: String,
  title: String,
  recent: Date,
  body: String,
  category: String,
  likes: Number,
  commentCount: Number,
  comments: [commentSchema],
  url: String,
  rateUp: Boolean,
  rateDown: Boolean,
});

const Game = mongoose.model('games', gameSchema);

module.exports = Game;
