/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ArticleItemStyle,
  ArticleItemThumbnailContainer,
  ArticleItemThumbnail,
  ArticleItemTitle,
  BlurBackgroundStyle,
  TitleInfo,
  TitleInfoCategory,
  ArticleItemBody,
} from './StyledComponents.jsx';

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

  const stopBubble = (e) => {
    e.stopPropagation();
  };

  const updateRate = (action) => {
    if (action === 'like') {
      if (rateUp === true) { // reset like to neutral
        updateLikes({ rateUp: 'reset', rateDown: null }, game.gameNumber, announcement._id);
      }
      if (rateUp === null || rateUp === false) {
        if (rateDown === null) {
          updateLikes({ rateUp: true, rateDown: null }, game.gameNumber, announcement._id);
        }
        if (rateDown === true) {
          updateLikes({ rateUp: true, rateDown: 'doubleReset' }, game.gameNumber, announcement._id);
        }
      }
    }

    if (action === 'dislike') {
      if (rateDown === true) { // reset dislike to neutral
        updateLikes({ rateUp: null, rateDown: 'reset' }, game.gameNumber, announcement._id);
      }
      if (rateDown === null || rateDown === false) {
        if (rateUp === null) {
          updateLikes({ rateUp: null, rateDown: true }, game.gameNumber, announcement._id);
        }
        if (rateUp === true) {
          updateLikes({ rateUp: 'doubleReset', rateDown: true }, game.gameNumber, announcement._id);
        }
      }
    }
  };

  const like = () => {
    updateRate('like');
  };

  const dislike = () => {
    updateRate('dislike');
  };

  const [showShare, setShowShare] = useState(false);

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  const copyToClipBoard = () => {
    const el = document.createElement('textarea');
    el.value = announcement.url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <ArticleItemStyle onClick={stopBubble}>
      <ArticleItemThumbnailContainer>
        <ArticleItemThumbnail alt="thumbnail" src={announcement.thumbnailUrl} />
      </ArticleItemThumbnailContainer>
      <ArticleItemTitle>
        <BlurBackgroundStyle alt="blur background" src={announcement.thumbnailUrl} />
        <TitleInfo>
          <TitleInfoCategory>
            {announcement.category}
          </TitleInfoCategory>
              &nbsp;by
          {' '}
          { name }
            &nbsp;
          <span style={{ color: '#e2e2e2' }}>POSTED</span>
            &nbsp;
          {day}
          ,
          {' '}
          {month}
          {' '}
          {monthDay}
        </TitleInfo>
        <span style={{ fontSize: '3em' }}>{announcement.title}</span>
      </ArticleItemTitle>
      <ArticleItemBody>
        <img alt="blur background" src={announcement.thumbnailUrl} className="blur-background" id={announcement._id} />
        {announcement.body}
      </ArticleItemBody>
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
          <div id="interactions-share" onClick={toggleShare}>
            <img src="../img/share-logo.png" alt="" id="share-icon" />
            <span id="share-text">Share</span>
            {(showShare) ? (
              <div id="share-link">
                <div id="link">{announcement.url}</div>
                <button type="submit" id="copy" onClick={copyToClipBoard}>Copy link</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </ArticleItemStyle>
  );
};

export default ArticleItem;
