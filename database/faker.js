const faker = require('faker');
const db = require('./index.js');

const rate = faker.random.boolean();

const announcementsCount = Math.floor(Math.random() * 10);
const announcements = [];
const categories = ['event', 'announcement'];
for (let i = 0; i < announcementsCount; i += 1) {
  let randomIndex = Math.floor(Math.random() * 2);
  announcements.push({
    title: faker.lorem.sentence(),
    postDate: faker.date.recent(),
    body: faker.lorem.paragraphs(),
    category: categories[randomIndex],
    url: faker.internet.url(),
    thumbnailUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/efee37e07322802794443f01eda517422f667887_960x311.jpg',
  });
}

const commentCount = Math.floor(Math.random() * 50);
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
    likes: Math.floor(Math.random() * 100),
    commentCount,
    announcements,
    comments,
    url: faker.internet.url(),
    rateUp: rate,
    rateDown: !rate,
  };
  return data;
};

for (let i = 0; i < 1; i += 1) {
  db.Game.create(createFakeData(), (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    }
  });
}
