/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Announcements from './Announcements.jsx';
import Articles from './Articles.jsx';

const App = () => {
  const [showArticles, setShowArticles] = useState(false);
  const [game, setGame] = useState({});
  const [scroll, setScroll] = useState('');
  // eslint-disable-next-line no-undef
  const directUrlInput = window.location.search.slice(2);

  const toggleArticles = (input) => {
    if (typeof input === 'string') {
      setScroll(input);
    }
    setShowArticles(!showArticles);
  };

  const getRandomGame = () => {
    axios.get('/randomGame')
      .then((res) => {
        setGame(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getGame = () => {
    axios.get('/getGame', {
      params: {
        _id: directUrlInput,
      },
    })
      .then((res) => {
        setGame(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateLikes = (changes, gameId, announcementId) => {
    const { rateUp, rateDown } = changes;
    axios.patch('/updateLikes', {
      gameId,
      announcementId,
      rateUp,
      rateDown,
    })
      .then((data) => {
        setGame(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let allEvents;
  let allAnnouncements;
  let eventItem;
  let announcementItem;

  if (game.announcements !== undefined) {
    allEvents = game.announcements.filter((el) => el.category === 'event');
    allAnnouncements = game.announcements.filter((el) => el.category === 'announcement');
    allEvents.sort((a, b) => (new Date(b.postDate)) - (new Date(a.postDate)));
    allAnnouncements.sort((a, b) => (new Date(b.postDate)) - (new Date(a.postDate)));

    eventItem = allEvents[0];
    announcementItem = allAnnouncements[0];
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (directUrlInput === '') ? getRandomGame() : getGame(directUrlInput);
  }, []); // empty array as dependency required to stop infinite loop

  return (
    <div id="App-container">
      <div id="Announcements" className="events">
        <Announcements game={game} item={eventItem} toggleArticles={toggleArticles} kind="event" />
      </div>
      <div id="Announcements" className="announcements">
        <Announcements game={game} item={announcementItem} toggleArticles={toggleArticles} kind="announcement" />
      </div>
      <div id="article-modal">
        {(showArticles)
          ? (
            <Articles
              game={game}
              toggleArticles={toggleArticles}
              scroll={scroll}
              updateLikes={updateLikes}
            />
          ) : null}
      </div>
    </div>
  );
};

export default App;
