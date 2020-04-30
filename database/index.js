const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/fec', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

var faker = require('./faker.js');

db.on('error', (err) => {
  console.error('Connection Failed: ', err);
})

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
})

var commentSchema = new Schema({
  username: {type: String, unique: true},
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

for (var i = 0; i < 2; i++) {
  Game.create(faker.createFakeData(), (err, data) => {
    if (err) console.error('ERROR: ', err);
    console.log(data);
  });
};