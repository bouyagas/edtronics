import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import Article from '../Components/Article/Article';
import Aside from '../Components/Aside/Aside';
import Careers from '../Components/Careers/Careers';
import ContactEdtronics from '../Components/ContactEdtronics/ContactEdtronics';
import EdtronicInfo from '../Components/EdtronicInfo/EdtronicInfo'
import Events from '../Components/Events/Events';
import Footer from '../Components/Footer/Footer';
import Investors from '../Components/Investors/Investors';
import Main from '../Components/Main/Main';
import NavBar from '../Components/NavBar/NavBar';
import Newsroom from '../Components/Newsroom/Newsroom';
import PressInfo from '../Components/PressInfo/PressInfo';
import Recherches from '../Components/Recherches/Recherches';
import Accessibility from '../Components/Accessibility/Accessibility';
import CorperateSocialResponsibility from '../Components/CorperateSocialResponsibility/CorperateSocialResponsibility';
import DiversityAndInclusion from '../Components/DiversityAndInclusion/DiversityAndInclusion';
import Environment from '../Components/Environment/Environment';
import Privacy from '../Components/Privacy/Privacy';
import SupplierResponsibility from '../Components/SupplierResponsibility/SupplierResponsibility';
import './MainContainer.css'

export default class MainContainer extends React.Component {

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
          <div className="ui container">
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

