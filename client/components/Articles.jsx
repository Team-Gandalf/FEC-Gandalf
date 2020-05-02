import React, { useState, useEffect } from 'react';

const Articles = (props) => {
  return (
    <div id="articles" onClick={props.toggleArticles}> THIS WHERE THE ARTICLE WILL GO</div>
  );
};

export default Articles;
