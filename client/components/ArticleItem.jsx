import React, { useState } from 'react';

const ArticleItem = (props) => {

  return (
    <div id="article-item">
      <div className="article-item-thumbnail">
        THUMBNAIL
      </div>
      <div className="article-item-title">
        TITLE OF THE ARTICLE
      </div>
      <div className="article-item-body">
        It's here. Half-Life: Alyx, Valve's long-awaited return to the Half-Life series, is NOW AVAILABLE to play. Compatible with all PC-based VR headsets, the game has been designed from the ground up for virtual reality. Half-Life: Alyx can be purchased from the Steam store and is available for download and play immediately.
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
