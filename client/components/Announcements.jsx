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

  const weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };

  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  let announcement;

  if (allGames[0] !== undefined) {
    announcement = allGames[0].announcements[0];
  }

  const parseDate = (date) => {
    const parsed = new Date(date);
    const day = weekdays[parsed.getDay()].slice(0, 3);
    const month = months[parsed.getMonth()];
    const monthDay = parsed.getDate();
    const year = parsed.getFullYear();
    const time = parsed.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timezone: 'PDT',
      timeZoneName: 'short',
    });
    return `${day}, ${month} ${monthDay}, ${year} ${time}`;
  };


  // DOES NOT RENDER UNTIL THE INITIAL GET REQUEST IS COMPLETE
  if (allGames[0] === undefined) {
    return (<span>``</span>);
  }

  return (
    <div id="main-container" onMouseOver={renderOverlay} onFocus={renderOverlay} onMouseEnter={renderOverlay} onMouseLeave={unMountOverlay}>
      <div id="thumbnail">
        <img src={announcement.thumbnailUrl} alt="" id="mini-view-thumbnail" />
      </div>
      <div id="mini-title">
        <span id="mini-title-text">
          { allGames[0].title }
        </span>
        <br />
        <span className="summary-date">{parseDate(announcement.postDate)}</span>
      </div>
      { (hover) ? <Overlay game={allGames[0]} toggleArticles={props.toggleArticles} /> : null }
    </div>
  );
};

export default Announcements;
