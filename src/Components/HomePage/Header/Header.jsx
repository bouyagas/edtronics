import React, { Component } from 'react';
import './Header.css';

export default class Header extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    	header: 'Schooling System'
    }
  }

  render() {
    return (
      <div id="head">
         <h1 className='center'>{this.state.header}</h1>
      </div>
    );
  }
}
