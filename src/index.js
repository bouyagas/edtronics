'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './Container/App';
import Careers from './Components/Careers/Careers.jsx';
import ContactEdtronics from './Components/ContactEdtronics/ContactEdtronics.jsx';
import EdtronicInfo from './Components/EdtronicInfo/EdtronicInfo.jsx';
import Events from './Components/Events/Events.jsx';
import Investors from './Components/Investors/Investors.jsx';
import Newsroom from './Components/Newsroom/Newsroom.jsx';
import PressInfo from './Components/PressInfo/PressInfo.jsx';
import Recherches from './Components/Recherches/Recherches.jsx';
import Accessibility from './Components/Accessibility/Accessibility.jsx';
import CorperateSocialResponsibility from './Components/CorperateSocialResponsibility/CorperateSocialResponsibility.jsx';
import DiversityAndInclusion from './Components/DiversityAndInclusion/DiversityAndInclusion.jsx';
import Environment from './Components/Environment/Environment.jsx';
import Privacy from './Components/Privacy/Privacy.jsx';
import SupplierResponsibility from './Components/SupplierResponsibility/SupplierResponsibility.jsx';

import store, { history } from './store/configureStore';
// Add the reducer to your store on the `routing` key


const router = (
  <BrowserRouter>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
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
          </Route>
        </Router>
      </Provider>
  </BrowserRouter>
)


ReactDOM.render((router), document.querySelector('#root-container'));
