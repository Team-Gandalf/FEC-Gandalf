const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fec', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection Failed: ', err);
})

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
})