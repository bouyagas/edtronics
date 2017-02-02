'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './container/App';
import Careers from './components/Careers/Careers';
import ContactEdtronics from './components/ContactEdtronics/ContactEdtronics';
import EdtronicInfo from './components/EdtronicInfo/EdtronicInfo';
import Events from './components/Events/Events';
import Investors from './components/Investors/Investors';
import Newsroom from './components/Newsroom/Newsroom';
import PressInfo from './components/PressInfo/PressInfo';
import Recherches from './components/Recherches/Recherches';
import Accessibility from './components/Accessibility/Accessibility';
import CorperateSocialResponsibility from './components/CorperateSocialResponsibility/CorperateSocialResponsibility';
import DiversityAndInclusion from './components/DiversityAndInclusion/DiversityAndInclusion';
import Environment from './components/Environment/Environment';
import Privacy from './components/Privacy/Privacy';
import SupplierResponsibility from './components/SupplierResponsibility/SupplierResponsibility';


const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route to='/careers' component={Careers} />
      <Route to='/contact' component={ContactEdtronics}/>
      <Route to='/info' component={EdtronicInfo}/>
      <Route to='/events' component={Events}/>
      <Route to='/investors' component={Investors}/>
      <Route to='/news' component={Newsroom}/>
      <Route to='/press' component={PressInfo}/>
      <Route to='/recherches' component={Recherches}/>
      <Route to='/accessibility' component={Accessibility}/>
      <Route to='/social' component={CorperateSocialResponsibility}/>
      <Route to='/diversity' component={DiversityAndInclusion}/>
      <Route to='privacy' component={Privacy}/>
      <Route to="environment" component={Environment}/>
      <Route to='supplier'  component={ SupplierResponsibility}/>
    </Route>
  </Router>
)


ReactDOM.render((router), document.querySelector('#root-container'))
