/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

import Overlay from './Overlay.jsx';

const Announcements = (props) => {
  const [hover, setHover] = useState(false);
  const {allGames} = props;

  const renderOverlay = () => {
    setHover(true);
  };

  const unMountOverlay = () => {
    setHover(false);
  };

  // DOES NOT RENDER UNTIL THE INITIAL GET REQUEST IS COMPLETE
  if (allGames[0] === undefined) {
    return (<span>``</span>);
  }

  return (
    <div id="main-container" onMouseOver={renderOverlay} onFocus={renderOverlay} onMouseEnter={renderOverlay} onMouseLeave={unMountOverlay}>
      <div id="thumbnail">THUMBNAIL SECTION</div>
      <div id="mini-title">
        { allGames[0].title }
        <br />
        <span className="summary-date">{allGames[0].announcements[0].postDate}</span>
      </div>
      { (hover) ? <Overlay game={allGames[0]} toggleArticles={props.toggleArticles} /> : null }
    </div>
  );
};

export default Announcements;
