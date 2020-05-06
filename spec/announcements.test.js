/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../client/components/App';
import Announcements from '../client/components/Announcements';

const game = require('./game.js');

describe('App Component', () => {
  it('should render the App component correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it('should render the App component correctly with a given game', () => {
    const component = shallow(<App game={game} />);
    expect(component).toMatchSnapshot();
  });
});
