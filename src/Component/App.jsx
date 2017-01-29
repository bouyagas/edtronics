import React, { Component } from 'react';
import { Link } from 'react-router';
import Article from './Article/Article'
import NavBar from './NavBar/NavBar';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
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



export default App;
