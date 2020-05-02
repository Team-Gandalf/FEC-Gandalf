import React from 'react';

const Overlay = (props) => {

  const loadPage = () => {
    console.log('Action: Load Page!');
  };

  return (
    <div id="overlay" onClick={loadPage}>
      <span className="category">{props.game.announcements[0].category}</span>
      <br />
      <br />
      {props.game.announcements[0].body}
    </div>
  );
};

export default Overlay;