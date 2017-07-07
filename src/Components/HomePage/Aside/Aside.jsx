import React, { Component } from 'react';
import { Link } from 'react-router';
import './Aside.css';

export default class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buy: "Learn More"
    }
  }

  render() {
    return (
       <div className="row">
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/blur.jpg')} alt="class"/>
                    <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text" to="#">{this.state.buy}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/classroom.jpg')} alt="class"/>
                    <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text" to="#">{this.state.buy}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/book.jpg')} alt="class"/>
                    <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text" to="#">{this.state.buy}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/libery.jpg')} alt="class"/>
                    <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text" to="#">{this.state.buy}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
     );
  }
}




