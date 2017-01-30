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
import Accessibility from './Components/Accessibility/Accessibility';
import CorperateSocialResponsibility from './Components/CorperateSocialResponsibility/CorperateSocialResponsibility';
import DiversityAndInclusion from './Components/DiversityAndInclusion/DiversityAndInclusion';
import Environment from './Components/Environment/Environment';
import Privacy from './Components/Privacy/Privacy';
import SupplierResponsibility from './Components/SupplierResponsibility/SupplierResponsibility';
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
