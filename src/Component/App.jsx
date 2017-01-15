import React, { Component } from 'react';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import NavaBar from './NavaBar/NavaBar';
import './App.css'

class App extends Component {
    render() {
        return (
          <div>
           <NavaBar />
            <Header />
            <Main />
            < Aside />
           <Footer />
          </div>
        );
    }
}

export default App;
