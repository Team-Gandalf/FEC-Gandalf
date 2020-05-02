import React from 'react';

const Overlay = (props) => {

  const loadPage = () => {
    console.log('Action: Load Page!');
  };

  return (
    <div id="overlay" onClick={loadPage}>
      {props.game.announcements[0].body}
      {/* This section will overlay the main announcement component when hovering over the main-container area */}
    </div>
  );
};

export default Overlay;
