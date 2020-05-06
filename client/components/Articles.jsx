/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ArticleItem from './ArticleItem.jsx';

const Articles = (props) => {
  const { game, toggleArticles, scroll } = props;
  const { name } = game;
  const collection = game.announcements;
  collection.sort((a, b) => (new Date(b.postDate)) - (new Date(a.postDate)));

  useEffect((() => {
    const element = document.getElementById(scroll);
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }), []);

  return (
    <div id="articles" onClick={toggleArticles}>
      <div id="article-item-area">
        <div id="scroll-buttons">
          <svg width="50" height="50">
            <circle r="20" fill="orange" />
          </svg>
        </div>
        {collection.map((announcement) => (
          <ArticleItem
            name={name}
            announcement={announcement}
            key={announcement._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
