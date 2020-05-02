/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem.jsx';

const Articles = (props) => {
  return (
    <div id="articles" onClick={props.toggleArticles}>
      <ArticleItem />
      <div className="article-item-gaps"><br /></div>
    </div>
  );
};

export default Articles;
