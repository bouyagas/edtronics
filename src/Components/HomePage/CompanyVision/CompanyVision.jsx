import React, { Component } from 'react';
import { Link } from 'react-router';
import './CompanyVision.css';

export default class CompanyVision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="vision">
            <h1>Demain of expertise</h1>
            <p> We specialize in research,  designing, developing and manufacturing educational electronics, computer softwares / hardwares and online services that intend for education purposes</p>
            <Link to="#!" className="btn-large mybtn2 waves-effect waves-light black white-text" role="button">leaner more <span className="test">></span></Link>
      </div>
    );
  }
}
