'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './Components/App';
import Careers from './Components/Careers/Careers';
import ContactEdtronics from './Components/ContactEdtronics/ContactEdtronics';
import EdtronicInfo from './Components/EdtronicInfo/EdtronicInfo';
import Events from './Components/Events/Events';
import Investors from './Components/Investors/Investors';
import Newsroom from './Components/Newsroom/Newsroom';
import PressInfo from './Components/PressInfo/PressInfo';
import Recherches from './Components/Recherches/Recherches';
import Accessibility from './Components/Accessibility/Accessibility';
import CorperateSocialResponsibility from './Components/CorperateSocialResponsibility/CorperateSocialResponsibility';
import DiversityAndInclusion from './Components/DiversityAndInclusion/DiversityAndInclusion';
import Environment from './Components/Environment/Environment';
import Privacy from './Components/Privacy/Privacy';
import SupplierResponsibility from './Components/SupplierResponsibility/SupplierResponsibility';


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
