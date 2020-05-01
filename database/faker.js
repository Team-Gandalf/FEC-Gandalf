const faker = require('faker');
const Game = require('./index.js');

const categories = ['event', 'announcement'];
const randomIndex = Math.floor(Math.random() * 2);
const commentCount = Math.floor(Math.random() * 50);
const rate = faker.random.boolean();

const comments = [];
for (let i = 0; i < commentCount; i += 1) {
  comments.push({
    username: faker.internet.userName(),
    postDate: faker.date.past(),
    commentBody: faker.lorem.paragraph(),
  });
}

const createFakeData = () => {
  const data = {
    name: faker.lorem.words(),
    image: faker.image.image(),
    title: faker.lorem.sentence(),
    recent: faker.date.recent(),
    body: faker.lorem.paragraphs(),
    category: categories[randomIndex],
    likes: Math.floor(Math.random() * 100),
    commentCount,
    comments,
    url: faker.internet.url(),
    rateUp: rate,
    rateDown: !rate,
  };
  return data;
};

for (let i = 0; i < 100; i += 1) {
  Game.create(createFakeData(), (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    }
  });
}
