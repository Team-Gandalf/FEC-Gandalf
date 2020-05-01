const faker = require('faker');
const Game = require('./index.js');

const categories = ['event', 'announcement'];
var randomIndex =  Math.floor(Math.random() * 2);
var commentCount = Math.floor(Math.random() * 50);
var rate = faker.random.boolean();

var comments = [];
for (var i = 0; i < commentCount; i++) {
  comments.push({
    username: faker.internet.userName(),
    postDate: faker.date.past(),
    commentBody: faker.lorem.paragraph(),
  });
}

 var createFakeData = () => {
  var data = {
    name: faker.lorem.words(),
    image: faker.image.image(),
    title: faker.lorem.sentence(),
    recent: faker.date.recent(),
    body: faker.lorem.paragraphs(),
    category: categories[randomIndex],
    likes: Math.floor(Math.random() * 100),
    commentCount: commentCount,
    comments: comments,
    url: faker.internet.url(),
    rateUp: rate,
    rateDown: !rate
  };
  return data;
}

for (var i = 0; i < 100; i++) {
  Game.create(createFakeData(), (err, data) => {
    if (err) {
      console.error('ERROR: ', err);
    }
  });
}
