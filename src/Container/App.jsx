import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Article from '../components/Article/Article';
import Aside from '../components/Aside/Aside';
import Careers from '../components/Careers/Careers';
import ContactEdtronics from '../components/ContactEdtronics/ContactEdtronics';
import EdtronicInfo from '../components/EdtronicInfo/EdtronicInfo'
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import Investors from '../components/Investors/Investors';
import Main from '../components/Main/Main';
import NavBar from '../components/NavBar/NavBar';
import Newsroom from '../components/Newsroom/Newsroom';
import PressInfo from '../components/PressInfo/PressInfo';
import Recherches from '../components/Recherches/Recherches';
import Accessibility from '../components/Accessibility/Accessibility';
import CorperateSocialResponsibility from '../components/CorperateSocialResponsibility/CorperateSocialResponsibility';
import DiversityAndInclusion from '../components/DiversityAndInclusion/DiversityAndInclusion';
import Environment from '../components/Environment/Environment';
import Privacy from '../components/Privacy/Privacy';
import SupplierResponsibility from '../components/SupplierResponsibility/SupplierResponsibility';
import './App.css'

export default class App extends React.Component {

    static defaultProps = {};

    static propTypes = {};

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

