/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ArticleItem from './ArticleItem.jsx';

const Articles = (props) => {
  const { game, toggleArticles } = props;
  const { name } = game;
  const collection = game.announcements;
  collection.sort((a, b) => {
    return (new Date(b.postDate)) - (new Date(a.postDate));
  });

  return (
    <div id="articles" onClick={toggleArticles}>
      <div id="article-item-area">
        <div id="scroll-buttons">
          <svg width="50" height="50">
            <circle r="20" fill="orange" />
          </svg>
        </div>
        {collection.map((announcement) => {
          return <ArticleItem name={name} announcement={announcement} key={announcement._id}/>;
        })}
      </div>
    </div>
  );
};

export default Articles;
