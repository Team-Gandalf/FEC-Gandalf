const faker = require('faker');
const db = require('./index.js');

const rate = faker.random.boolean();

const thumbnails = [
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/efee37e07322802794443f01eda517422f667887_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/6144970/310e75fdaf03de839ba6f8bd3656bfd0cd408724_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steam/apps/15100/header.jpg?t=1532007211',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/35210272/1d23fd0d78c84916ed943ae0410cd77adb6eff46.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36260268/0201fd67aef0968802adc9c24473860baa3f39ab_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36260268/31e792edea8b4d5a9c5e4cbbc85ba024445dd07f_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steam/apps/10150/0000008861.600x338.jpg?t=1534443367',
  'https://steamcdn-a.akamaihd.net/steam/apps/10150/0000008853.600x338.jpg?t=1534443367',
  'https://steamcdn-a.akamaihd.net/steam/apps/13500/header.jpg?t=1447351266',
];

const announcementsCount = Math.floor(Math.random() * 10);
const produceAnnouncements = () => {
  const announcements = [];
  const categories = ['event', 'announcement'];
  for (let i = 0; i < announcementsCount; i += 1) {
    const randomIndex = Math.floor(Math.random() * 2);
    announcements.push({
      title: faker.lorem.sentence().slice(0, 50),
      postDate: faker.date.recent(),
      body: faker.lorem.paragraphs().slice(0, 1000),
      category: categories[randomIndex],
      url: faker.internet.url(),
      thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
    });
  }
  return announcements;
};

const commentCount = Math.floor(Math.random() * 50);
const produceComments = () => {
  const comments = [];
  for (let i = 0; i < commentCount; i += 1) {
    comments.push({
      username: faker.internet.userName(),
      postDate: faker.date.past(),
      commentBody: faker.lorem.paragraph(),
    });
  }
  return comments;
};

const createFakeData = () => {
  const allAnnouncements = produceAnnouncements();
  const allComments = produceComments();
  const data = {
    name: faker.lorem.words().slice(0, 30),
    image: faker.image.image(),
    likes: Math.floor(Math.random() * 100),
    commentCount,
    announcements: allAnnouncements,
    comments: allComments,
    url: faker.internet.url(),
    rateUp: rate,
    rateDown: !rate,
  };
  return data;
};

for (let i = 0; i < 5; i += 1) {
  db.Game.create(createFakeData(), (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    }
  });
}
