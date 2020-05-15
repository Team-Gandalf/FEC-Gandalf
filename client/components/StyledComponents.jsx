import styles from 'styled-components';

export const EventService = styles.div`
    display: inline-flex;
    max-width: 30rem;
    width: 20rem;
    height: 18rem;
    font-size: 2em;
    color: ghostwhite;
    border: none;
    box-shadow: -1px 1px 0.3em black;`;

export const AnnouncementService = styles(EventService)`
    margin-left: 0.5rem;`;

export const ArticlesWrapper = styles.div`
  background: #0d0f17f7;
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  margin: 0 auto;
  text-align: center;
  overflow: scroll;
`;

export const ArticleItemArea = styles.div`
  width: 65vw;
  margin: 0 auto;
`;

export const OverlayStyle = styles.div`
  background: #14171fd4;
  font-size: 0.5em;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 40px;
  z-index: 50;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: white;
  box-sizing: border-box;
  padding: 1rem;
  cursor: pointer;
  animation: overlayFade 0.5s ease 0s 1 normal none;
  font-size: .8rem;
`;

export const OverlayCategory = styles.span`
  text-transform: uppercase;
`;

export const ArticleItemStyle = styles.div`
  height: 50vw;
  display: grid;
  grid-template-areas:
      "thumbnail"
      "thumbnail"
      "thumbnail"
      "title"
      "body"
      "body"
      "body"
      "interactions"
      "interactions";
  font-size: 0.5em;
  color: #ffffff;
  padding-top: 3rem;
  max-height: 40rem;
  max-width: 50rem;
  margin: 0 auto;
`;

export const ArticleItemThumbnailContainer = styles.div`
  display: grid;
  grid-area: thumbnail;
  grid-row: 1 / span 3;
  align-items: center;
`;

export const ArticleItemThumbnail = styles.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BlurBackgroundStyle = styles.img`
  filter: blur(5em);
  object-fit: cover;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 5rem;
  transform: scaleX(-1);
`;

export const ArticleItemTitle = styles.div`
  align-items: center;
  background: #37393f;
  display: grid;
  grid-area: title;
  grid-row: 4 / span 1;
  text-align: left;
  padding-left: 3.5em;
  box-shadow: 0px 0px 5px #1d1e21;
  z-index: 10;
  overflow: hidden;
  position: relative;
  align-content: center;
`;

export const TitleInfo = styles.div`
  font-size: 1.5em;
  color: #b3b3b3;
`;

export const TitleInfoCategory = styles.span`
  text-transform: uppercase;
  font-size: 1em;
  color: #51a7ff;
`;

export const ArticleItemBody = styles.div`
  background: #37393f;
  display: grid;
  grid-area: body;
  grid-row: 5 / span 3;
  align-items: baseline;
  text-align: left;
  padding: 2em;
  font-size: 1.75em;
  box-shadow: 0px 0px 5px #1d1e21;
  z-index: 9;
  position: relative;
  overflow: hidden;
`;

export const BlurBackground = styles.img`
  filter: blur(5em);
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: -10;
`;

export const BlurBackgroundTitle = styles(BlurBackground)`
  z-index: -5;
  height: 5rem;
  transform: scaleX(-1);
`;


// export { EventService, AnnouncementService };
