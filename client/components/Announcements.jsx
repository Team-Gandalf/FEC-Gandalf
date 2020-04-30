import React, {useState, useEffect, useCallback} from 'react';
import Overlay from './Overlay.jsx';

const Announcements = () => {
  const [hover, setHover] = useState(false);

  const renderOverlay = () => {
    setHover(!hover);
  }

  return (
  <div id="main-container" onMouseEnter={renderOverlay} onMouseLeave={renderOverlay}>
    <div id="thumbnail">THUMBNAIL SECTION</div>
    <div id="mini-title">Hack Reactor: Heroes is Now Available</div>
    {(hover)? <Overlay /> : null}
  </div>
  )
};

export default Announcements;