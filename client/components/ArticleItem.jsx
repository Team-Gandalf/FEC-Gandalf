/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const stopBubble = (e) => {
  e.stopPropagation();
};


const ArticleItem = (props) => {

  const {
    announcement, game, name, updateLikes,
  } = props;
  const {
    rateUp, rateDown, likes, commentCount,
  } = announcement;

  const rateDownStyle = {
    filter: 'none',
  };
  const rateUpStyle = {
    filter: 'none',
  };

  if (rateDown === true) {
    rateDownStyle.filter = 'invert(30%) sepia(100%) saturate(5049%) hue-rotate(330deg) brightness(90%) contrast(100%)';
  }

  if (rateUp === true) {
    rateUpStyle.filter = 'invert(7%) sepia(55%) saturate(3000%) hue-rotate(70deg) brightness(90%) contrast(100%)';
  }

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

  const updateRate = (action) => {
    if (action === 'like') {
      if (rateUp === null || rateDown === true) {
        updateLikes({ rateUp: true, rateDown: false }, game._id, announcement._id);
      }
    }

    if (action === 'dislike') {
      if (rateDown === null || rateUp === true) {
        updateLikes({ rateUp: false, rateDown: true }, game._id, announcement._id);
      }
    }
  };

  const like = () => {
    updateRate('like');
  };

  const dislike = () => {
    updateRate('dislike');
  };

  return (
    <div id="article-item" onClick={stopBubble}>
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
        <img alt="blur background" src={announcement.thumbnailUrl} className="blur-background" id={announcement._id} />
        {announcement.body}
      </div>
      <div className="article-item-interactions">
        <div id="interactions-inner">
          <div id="interaction-ratings">
            <div id="rate-count">
              <img src="../img/thumbs-up-blue.png" alt="" id="blue-thumb" />
              <div id="count">
                {likes}
              </div>
            </div>
            <div id="user-rating">
              <div id="rate-up" onClick={like}>
                <img
                  id="discussion-thumbs-up"
                  src="../img/discussion-thumbs-up.png"
                  alt=""
                  style={rateUpStyle}
                />
                &nbsp;Rate Up
              </div>
              <div id="rate-down">
                <img
                  id="discussion-thumbs-down"
                  src="../img/discussion-thumbs-up.png"
                  alt=""
                  style={rateDownStyle}
                  onClick={dislike}
                />
              </div>
            </div>
          </div>
          <div id="interactions-comments">
            <img src="../img/blue-bubble.png" alt="" className="blue-bubble" />
            &nbsp;
            <span id="comment-count">{commentCount}</span>
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
