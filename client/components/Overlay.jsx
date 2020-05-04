/* eslint-disable react/prop-types */
import React from 'react';

const Overlay = (props) => {

  const { category } = props.game.announcements[0];

  const loadPage = () => {
    props.toggleArticles();
  };

  return (
    <div id="overlay" onClick={loadPage}>
      <span className="category">{category}</span>
      <br />
      <br />
      {props.game.announcements[0].body}
    </div>
  );
};

export default Overlay;