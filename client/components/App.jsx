/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Announcements from './Announcements.jsx';
import Articles from './Articles.jsx';

const App = () => {
  const [showArticles, setShowArticles] = useState(false);
  const [game, setGame] = useState({});

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

  useEffect(() => {
    getRandomGame();
  }, []); // empty array as dependency required to stop infinite loop

  return (
    <div>
      <div id="Announcements">
        {console.log(game)}
        <Announcements game={game} toggleArticles={toggleArticles} />
      </div>
      <div id="article-modal">
        {(showArticles) ? <Articles game={game} toggleArticles={toggleArticles} /> : null}
      </div>
    </div>
  );
};

export default App;
