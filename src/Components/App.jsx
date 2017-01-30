import React, { Component } from 'react';
import { Link } from 'react-router';
import Article from './Article/Article';
import Aside from './Aside/Aside';
import Careers from './Careers/Careers';
import ContactEdtronics from './ContactEdtronics/ContactEdtronics';
import EdtronicInfo from './EdtronicInfo/EdtronicInfo'
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Investors from './Investors/Investors';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import Newsroom from './Newsroom/Newsroom';
import PressInfo from './PressInfo/PressInfo';
import Recherches from './Recherches/Recherches';
import Accessibility from './Accessibility/Accessibility';
import CorperateSocialResponsibility from './CorperateSocialResponsibility/CorperateSocialResponsibility';
import DiversityAndInclusion from './DiversityAndInclusion/DiversityAndInclusion';
import Environment from './Environment/Environment';
import Privacy from './Privacy/Privacy';
import SupplierResponsibility from './SupplierResponsibility/SupplierResponsibility';
import './App.css'

class App extends React.Component {
    constructor(props) {
      super(props);

        this.state = {
        // states goes here !!!
      };
    }

    render() {
        return (
          <div>
           <NavBar />
           <Main />
           <Aside />
           <Article />
           { this.props.children && React.cloneElement(this.props.children, {

           })}
          <Footer />
          </div>
        );
    }



}



export default App;
