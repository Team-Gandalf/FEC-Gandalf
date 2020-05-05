/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ArticleItem from './ArticleItem.jsx';

const Articles = (props) => {
  const { game } = props;
  const collection = game.announcements;
  return (
    <div id="articles" onClick={props.toggleArticles}>
      <div id="article-item-area">
        <div id="scroll-buttons">
          <svg width="50" height="50">
            <circle r="20" fill="orange" />
          </svg>
        </div>
        <ArticleItem announcement={collection[0]} />
      </div>
    </div>
  );
};

export default Articles;
