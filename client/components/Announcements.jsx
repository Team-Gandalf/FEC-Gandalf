/* eslint-disable import/extensions */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Overlay from './Overlay.jsx';

const Announcements = () => {
  const [hover, setHover] = useState(false);
  const [allGames, setAllGames] = useState([]);

  const renderOverlay = () => {
    setHover(!hover);
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

  // DOES NOT RENDER UNTIL THE INITIAL GET REQUEST IS COMPLETE
  if (allGames[0] === undefined) {
    return (<span>``</span>);
  }

  return (
    <div id="main-container" onMouseEnter={renderOverlay} onMouseLeave={renderOverlay}>
      <div id="thumbnail">THUMBNAIL SECTION</div>
      <div id="mini-title">{allGames[0].title}</div>
      {(hover) ? <Overlay game={allGames[0]} /> : null}
    </div>
  );
};

export default Announcements;
