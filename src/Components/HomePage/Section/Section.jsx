import React, { Component } from 'react';
import { Link } from 'react-router';
import './Section.css'
export default class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      learn: "Learn More",
        products: {
         classroom: 'Smart Classrooms',
         backpack: 'Smart Backpack',
         hardware: 'Smart Arm Desk',
         glass: 'Hologram Glass'
        }
    }
  }

  render() {
    return (
      <div className="row">
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/tim-gouw-167127.jpg')} alt="class"/>
                    <span className="card-title title title">{this.state.products.classroom}</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text link" to="#">{this.state.learn}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/tamarcus-brown-131428.jpg')} alt="class"/>
                    <span className="card-title title">{this.state.products.hardware}</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text link" to="#">{this.state.learn}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/leaf.jpg')} alt="class"/>
                    <span className="card-title title">{this.state.products.backpack}</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text link" to="#">{this.state.learn}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col s3">
            <div className="card hoverable">
               <div className="card-image">
                    <img src={require('../../img/libery.jpg')} alt="class"/>
                    <span className="card-title title">{this.state.products.glass}</span>
               </div>
               <div className="card-content">
                   <p> am a very simple card. I am good at containing small bits of information.</p>
               </div>
               <div className="card-action">
                  <ul>
                  	<li>
                  		<Link className="black-text link" to="#">{this.state.learn}</Link>
                  	</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
