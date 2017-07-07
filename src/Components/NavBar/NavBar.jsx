import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavBar.css';

export default class NavBar extends React.Component {


  constructor(props) {
    super(props);
     this.state = {
      brandName: 'EDTRONICS',
      navlink: {
        preSchool: 'Pre-school',
        k12: 'K-12',
        higherEducation: 'Higher Education',
        support: 'Support',
        more: 'More',
        signin: 'Sign in',
      }
     }
  }

  render() {
    return (
      <div>

        <ul id="dropdown1" className="dropdown-content">
           <li><a href="#!">one</a></li>
           <li><a href="#!">two</a></li>
           <li className="divider"></li>
           <li><a href="#!">three</a></li>
        </ul>

          <nav  className="nav-wrapper white container"  role="navigation">
            <div>
                <Link to="/" className="brand  grey-text text-darken-3">{this.state.brandName}</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="#" className="navlink grey-text text-darken-3">{this.state.navlink.preSchool}</Link></li>
                    <li><Link to="#" className="navlink grey-text text-darken-3">{this.state.navlink.k12}</Link></li>
                    <li><Link to="#" className="navlink grey-text text-darken-3">{this.state.navlink.higherEducation}</Link></li>
                    <li><Link to="#" className="navlink grey-text text-darken-3">{this.state.navlink.support}</Link></li>
                    <li><Link to="#" className="navlink grey-text text-darken-3">{this.state.navlink.more}</Link></li>
                    <li><Link to="#" className="navlink dropdown-button grey-text text-darken-3" data-activates="dropdown1" >{this.state.navlink.signin}</Link></li>
                 </ul>
            </div>
          </nav>
      </div>
    );
  }
}



