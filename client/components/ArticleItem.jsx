/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); // scrollTo(x-cord, ycord)

const stopBubble = (e) => {
  e.stopPropagation();
};

const ArticleItem = (props) => {
  const { announcement, name } = props;

  const weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };

  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const day = weekdays[new Date(announcement.postDate).getDay()];
  const month = months[new Date(announcement.postDate).getMonth()];
  const monthDay = new Date(announcement.postDate).getDate();

  return (
    <div id="article-item" onClick={(e) => { stopBubble(e); }}>
      <div className="article-item-thumbnail-container">
        <img alt="thumbnail" src={announcement.thumbnailUrl} className="article-item-thumbnail" />
      </div>
      <div className="article-item-title">
        <img alt="blur background" src={announcement.thumbnailUrl} className="blur-background-title" />
        <div className="title-info">
          <span id="title-info-category">
            {announcement.category}
          </span>
            &nbsp;by
          {' '}
          { name }
          &nbsp;
          <span id="posted">POSTED</span>
          &nbsp;
          {day}
          ,
          {' '}
          {month}
          {' '}
          {monthDay}
        </div>
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
            <img src="../img/blue-bubble.png" alt="" className="blue-bubble" />
&nbsp;
            <span id="comment-count">111</span>
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
