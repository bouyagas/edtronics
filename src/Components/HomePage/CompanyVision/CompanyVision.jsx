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
            <p>At Edtronics, we specialize in research,  designing, developing and manufacturing <br/> educational electronics, computer softwares / hardwares and  online services that <br/> intend for education purposes</p>
            <Link to="#!" className="btn-large mybtn2 hoverable black white-text" role="button">leaner more <span className="test">></span></Link>
      </div>
    );
  }
}
