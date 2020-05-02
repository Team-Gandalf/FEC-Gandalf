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
        ARTICLE BODY
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
            <div id="rate-up">
              <img id="discussion-thumbs-up" src="../img/discussion-thumbs-up.png" alt="" />
              &nbsp;Rate Up
            </div>
            <div id="rate-down">
              <img id="discussion-thumbs-down" src="../img/discussion-thumbs-up.png" alt="" />
            </div>
          </div>
          <div id="interactions-comments">COMMENTS</div>
          <div id="interactions-share">SHARE</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
