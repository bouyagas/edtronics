'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './Component/Main/Main';
import App from './Component/App';


const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
)


ReactDOM.render((router), document.querySelector('#root-container'))
