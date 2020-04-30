import React from 'react';

const Overlay  = (props) => {

  const loadPage = (props) => {
    console.log('Action: Load Page!');
  }

  return (
    <div id="overlay" onClick={loadPage}>
      This section will overlay the main announcement component when hovering over the main-container area
    </div>
  );
}

export default Overlay;