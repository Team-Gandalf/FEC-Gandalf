/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../client/components/App';

// require('regenerator-runtime/runtime');

// const mongoose = require('mongoose');
// const supertest = require('supertest');

// const database = 'fec';
// const app = require('../index.js');

// const request = supertest(app); // this is now essentially the server for testing

// beforeAll(async () => {
//   const url = `mongodb://127.0.0.1/${database}`;
//   await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// });

describe('App Component', () => {
  it('should render the App component correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  // it('should render the App component correctly with a given game', async (done) => {
  //   const res = await request.get('/randomGame');
  //   const randomGame = res.body;
  //   const component = shallow(<App game={randomGame} />);
  //   expect(component).toMatchSnapshot();
  //   done();
  // });
});
