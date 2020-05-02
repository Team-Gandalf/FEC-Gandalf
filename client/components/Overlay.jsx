import React from 'react';

const Overlay = (props) => {

  const loadPage = () => {
    props.toggleArticles();
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