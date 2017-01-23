import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Aside from './Component/Aside/Aside';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import NavaBar from './Component/NavaBar/NavaBar';
import App from './Component/App';


const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Aside}/>
      <Route path='/footer' component={Footer}/>
      <Route path='/header' component={Header}/>
      <Route path='/main' component={Main}/>
      <Route path='/navbar' component={NavaBar}/>
    </Route>
  </Router>
)


ReactDOM.render((router), document.querySelector('#root-container'))
