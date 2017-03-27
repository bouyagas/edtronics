import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import Article from '../Components/Article/Article.jsx';
import Aside from '../Components/Aside/Aside.jsx';
import Careers from '../Components/Careers/Careers.jsx';
import ContactEdtronics from '../Components/ContactEdtronics/ContactEdtronics.jsx';
import EdtronicInfo from '../Components/EdtronicInfo/EdtronicInfo.jsx'
import Events from '../Components/Events/Events.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Investors from '../Components/Investors/Investors.jsx';
import Main from '../Components/Main/Main.jsx';
import NavBar from '../Components/NavBar/NavBar.jsx';
import Newsroom from '../Components/Newsroom/Newsroom.jsx';
import PressInfo from '../Components/PressInfo/PressInfo.jsx';
import Recherches from '../Components/Recherches/Recherches.jsx';
import Accessibility from '../Components/Accessibility/Accessibility.jsx';
import CorperateSocialResponsibility from '../Components/CorperateSocialResponsibility/CorperateSocialResponsibility.jsx';
import DiversityAndInclusion from '../Components/DiversityAndInclusion/DiversityAndInclusion.jsx';
import Environment from '../Components/Environment/Environment.jsx';
import Privacy from '../Components/Privacy/Privacy.jsx';
import SupplierResponsibility from '../Components/SupplierResponsibility/SupplierResponsibility.jsx';
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

