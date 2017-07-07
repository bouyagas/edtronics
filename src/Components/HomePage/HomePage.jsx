import React, {  Component } from 'react';
import Article from './Article/Article.jsx';
import Aside from './Aside/Aside.jsx';
import Main from './Main/Main.jsx';
import Section from './Section/Section.jsx';
import Header from './Header/Header.jsx';
import CompanyVision from './CompanyVision/CompanyVision.jsx';
import KeyActivities from './KeyActivities/KeyActivities.jsx'
export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
       <Main />
       <Aside />
       <Header />
       <Article />
       <Section />
       <KeyActivities />
       <CompanyVision />
      </div>
    );
  }
}
