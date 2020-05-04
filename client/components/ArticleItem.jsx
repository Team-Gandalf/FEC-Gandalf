/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ArticleItem = (props) => {
const {announcement} = props;
  return (
    <div id="article-item">
      {console.log(announcement)}
      <div className="article-item-thumbnail-container">
        <img alt="thumbnail" src={announcement.thumbnailUrl} className="article-item-thumbnail" />
      </div>
      <div className="article-item-title">
      <img alt="blur background" src={announcement.thumbnailUrl} className="blur-background-title" />
        <span className="announcement-title">{announcement.title}</span>
      </div>
      <div className="article-item-body">
        <img alt="blur background" src={announcement.thumbnailUrl} className="blur-background" />
        {announcement.body}
      </div>
      <div className="article-item-interactions">
        <div id="interactions-inner">
          <div id="interaction-ratings">
            <div id="rate-count">
            <img src="../img/thumbs-up-blue.png" alt="" id="blue-thumb" />
              <div id="count">
                1,111
                </div>
            </div>
            <div id="user-rating">
              <div id="rate-up">
                <img id="discussion-thumbs-up" src="../img/discussion-thumbs-up.png" alt="" />
                &nbsp;Rate Up
              </div>
              <div id="rate-down">
                <img id="discussion-thumbs-down" src="../img/discussion-thumbs-up.png" alt="" />
              </div>
            </div>
          </div>
          <div id="interactions-comments">
            <img src="../img/blue-bubble.png" alt="" className="blue-bubble" /><span id="comment-count">111</span>
            <span id="discuss-text">Discuss</span>
          </div>
          <div id="interactions-share">
            <img src="../img/share-logo.png" alt="" id="share-icon" />
            <span id="share-text">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
