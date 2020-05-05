/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Announcements from './Announcements.jsx';
import Articles from './Articles.jsx';

const App = () => {
  const [showArticles, setShowArticles] = useState(false);
  const [game, setGame] = useState({});
  // eslint-disable-next-line no-undef
  const directUrlInput = window.location.search.slice(2);

  const toggleArticles = () => {
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

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (directUrlInput === '') ? getRandomGame() : getGame(directUrlInput);
  }, []); // empty array as dependency required to stop infinite loop

  return (
    <div>
      <div id="Announcements" className="events">
        <Announcements game={game} toggleArticles={toggleArticles} kind="events" />
      </div>
      <div id="Announcements" className="announcements">
        <Announcements game={game} toggleArticles={toggleArticles} kind="announcements" />
      </div>
      <div id="article-modal">
        {(showArticles) ? <Articles game={game} toggleArticles={toggleArticles} /> : null}
      </div>
    </div>
  );
};

export default App;
