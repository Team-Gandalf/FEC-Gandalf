/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Announcements from './Announcements.jsx';
import Articles from './Articles.jsx';

const App = () => {
  const [showArticles, setShowArticles] = useState(false);
  const [allGames, setAllGames] = useState([]);

  const toggleArticles = () => {
    setShowArticles(!showArticles);
  };

  const getAllGames = () => {
    axios.get('/allGames')
      .then((res) => {
        setAllGames(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  useEffect(() => {
    getAllGames();
  }, []); // empty array as dependency required to stop infinite loop

  return (
    <div>
      <div id="Announcements">
        <Announcements allGames={allGames} toggleArticles={toggleArticles} />
      </div>
      <div id="article-modal">
        {(showArticles) ? <Articles allGames={allGames} toggleArticles={toggleArticles} /> : null}
      </div>
    </div>
  );
};

export default App;
