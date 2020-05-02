/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Announcements from './Announcements.jsx';
import Articles from './Articles.jsx';

const App = () => {
  const [showArticles, setShowArticles] = useState(false);

  const toggleArticles = () => {
    setShowArticles(!showArticles);
  };

  return (
    <div>
      <div id="Announcements">
        <Announcements toggleArticles={toggleArticles} />
      </div>
      <div id="article-modal">
        {(showArticles) ? <Articles toggleArticles={toggleArticles} /> : null}
      </div>
    </div>
  );
};

export default App;
