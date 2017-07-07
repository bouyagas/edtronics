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
         <h3 className='center'>{this.state.header}</h3>
      </div>
    );
  }
}
