import React, {  Component } from 'react';
import Article from './Article/Article.jsx';
import Aside from './Aside/Aside.jsx';
import Main from './Main/Main.jsx';


export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
       <Main />
       <Aside />
       <Article />
      </div>
    );
  }
}
