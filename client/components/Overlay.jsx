/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

const Overlay = (props) => {
  const { item, toggleArticles } = props;
  const { category } = item;

  const loadPage = () => {
    toggleArticles(item._id);
  };

  return (
    <div id="overlay" onClick={loadPage}>
      <span className="category">{category}</span>
      <br />
      <br />
      {(item.body.length > 500)
        ? `${item.body.slice(0, 500)} ...`
        : item.body }
    </div>
  );
};

export default Overlay;
