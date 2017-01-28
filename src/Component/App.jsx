import React, { Component } from 'react';
import { Link } from 'react-router';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
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
           <Header/>
           { this.props.children && React.cloneElement(this.props.children, {


           })}
          <Footer />
          </div>
        );
    }



}



export default App;
