'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainContainer from './Container/MainContainer';
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
import NotFound from './NotFound/NotFound';
import store, { history } from './store/index';
// Add the reducer to your store on the `routing` key


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <Route path='/careers' component={Careers} />
        <Route path='/contact' component={ContactEdtronics}/>
        <Route path='/info' component={EdtronicInfo}/>
        <Route path='/events' component={Events}/>
        <Route path='/investors' component={Investors}/>
        <Route path='/news' component={Newsroom}/>
        <Route path='/press' component={PressInfo}/>
        <Route path='/recherches' component={Recherches}/>
        <Route path='/accessibility' component={Accessibility}/>
        <Route path='/social' component={CorperateSocialResponsibility}/>
        <Route path='/diversity' component={DiversityAndInclusion}/>
        <Route path='/privacy' component={Privacy}/>
        <Route path="/environment" component={Environment}/>
        <Route path='/supplier'  component={ SupplierResponsibility}/>
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
)


ReactDOM.render((router), document.querySelector('#root-container'))
