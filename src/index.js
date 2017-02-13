'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Router } from 'react-router';
import MainContainer from './Container/MainContainer';

import store, { history } from './store/index';
// Add the reducer to your store on the `routing` key


const router = (
  <BrowserRouter>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={MainContainer} />
        </Router>
      </Provider>
  </BrowserRouter>
)


ReactDOM.render((router), document.querySelector('#root-container'));
