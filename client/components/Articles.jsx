/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem.jsx';

const Articles = (props) => {
  return (
    <div id="articles" onClick={props.toggleArticles}>
      <div id="article-item-area">
        <div id="scroll-buttons">
          <svg width="50" height="50">
            <circle r="20" fill="orange" />
          </svg>
        </div>
        <ArticleItem />
        <ArticleItem />
      </div>
    </div>
  );
};

export default Articles;
