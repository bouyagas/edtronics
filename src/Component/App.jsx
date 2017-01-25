    import React, { Component } from 'react';
import { Link } from 'react-router';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import NavaBar from './NavaBar/NavaBar';
import './App.css'

class App extends React.Component {
    constructor(props) {
      super(props);

        this.state = {
          aside: 'This is the aside component',
          footer: 1,
          header: 'This is the header component',
          main: 'This is the main component',
          navbar: 'This is the navbar component',
      };
    }

    render() {
        return (
          <div>
           <Link to='/footer'>footer</Link>

           { this.props.children && React.cloneElement(this.props.children, {
              aside: this.state.aside,
              footer: this.state.footer,
              header: this.state.header,
              main: this.state.main,
              navbar: this.state.navbar

           })}
          </div>
        );
    }



}



export default App;
