import React, { Component } from 'react';
import { Link } from 'react-router';
import './Article.css';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="article">
           <h1>Our visoin of tomorrow's education</h1>
           <p>We enable students to go belong they limit of knowledge</p>
           <Link to="#!" className="btn-large mybtn waves-effect waves-light pink white-text" role="button">leaner more <span className="test">></span></Link>
      </div>
    );
  }
}

