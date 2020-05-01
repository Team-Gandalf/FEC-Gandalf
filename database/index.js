const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/fec', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection Failed: ', err);
})

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
})

var commentSchema = new Schema({
  username: String,
  postDate: Date,
  commentBody: String
})

var gameSchema = new Schema({
  name: {type: String, unique: true},
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
  rateDown: Boolean
});

var Game = mongoose.model('games', gameSchema);

module.exports = Game;