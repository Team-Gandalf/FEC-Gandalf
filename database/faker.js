const faker = require('faker');

const categories = ['event', 'announcement'];
var randomIndex =  Math.floor(Math.random() * 2);
var commentCount = Math.floor(Math.random() * 50);
var rate = faker.random.boolean();

var comments = [];
for (var i = 0; i < commentCount; i++) {
  comments.push({
    username: faker.internet.userName(),
    postdate: faker.date.past(),
    commentBody: faker.lorem.paragraph(),
  });
}

var fakeData = {
  name: faker.name.findName(),
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
}

module.exports.fakeData = fakeData;