import React from 'react';
import { Link } from 'react-router';
import './Footer.css';

const Footer = (props) => {
	return (
      <div id="footer">
      <div className="product-list">
       <h5> Edtronics Product</h5>
      	<ul>
      		<li><Link to="#" className="link">Interactive whiteboards</Link></li>
      		<li><Link to="#" className="link">Projectors</Link></li>
      		<li><Link to="#" className="link">Interactive Displays</Link></li>
      		<li><Link to="#" className="link">Interactive tables</Link></li>
      		<li><Link to="#" className="link">Telepresence</Link></li>
      		<li><Link to="#" className="link">Computerized or Smarted Table</Link></li>
      		<li><Link to="#" className="link">Computerized or Smarted Arm Desk</Link></li>
      		<li><Link to="#" className="link">Computerized or Smarted Desk</Link></li>
      		<li><Link to="#" className="link">Hologram Glass</Link></li>
      		<li><Link to="#" className="link">Backpack</Link></li>
      	</ul>
      </div>
      <div className="edu-system">
       <h5>Edtronics Services</h5>
      	<ul>
      		<li><Link to="#" className="link">Learning Management Systems</Link></li>
      		<li><Link to="#" className="link">Learning Content Development Systems</Link></li>
      		<li><Link to="#" className="link">Student Response Systems</Link></li>
      		<li><Link to="#" className="link">Assessment Systems</Link></li>
      		<li><Link to="#" className="link">Exam Systems</Link></li>
      		<li><Link to="#" className="link">Collaboration Systems</Link></li>
      		<li><Link to="#" className="link">Classroom Management Systems</Link></li>
      		<li><Link to="#" className="link">Document Management Systems</Link></li>
      		<li><Link to="#" className="link">Content Creation Systems</Link></li>
      	</ul>
      </div>
      <div className="store">
       <h5>Edtronics Store</h5>
        <ul>
       		<li><Link to="#" className="link">Find a Store</Link></li>
       		<li><Link to="#" className="link">Edtronics Store App </Link></li>
       		<li><Link to="#" className="link">Shopping Help</Link></li>
       		<li><Link to="#" className="link">Order Status</Link></li>
       		<li><Link to="#" className="link">Sales & support</Link></li>
       		<li><Link to="#" className="link">Financing</Link></li>
       	</ul>
       </div>
      <div className="learn">
       <h5>Learn</h5>
      	<ul>
      		<li><Link to="#" className="link">Personalize Learning</Link></li>
      		<li><Link to="#" className="link">Educational Data and Analytics</Link></li>
      		<li><Link to="#" className="link">Competent-Base Learning </Link></li>
      		<li><Link to="#" className="link">Machine Learning</Link></li>
      		<li><Link to="#" className="link">Virtual reality & Augmented reality</Link></li>
      		<li><Link to="#" className="link">Artificial Intelligence</Link></li>
      	</ul>
      </div>
      <div className="values">
        <h5>Edtronics Values</h5>
      	<ul>
      		<li><Link to="#" className="link">Diversity and inclusion</Link></li>
      		<li><Link to="#" className="link">Accessibility</Link></li>
      		<li><Link to="#" className="link">Environment</Link></li>
      		<li><Link to="#" className="link">Privacy</Link></li>
      		<li><Link to="#" className="link">Supplier Responsibility</Link></li>
      		<li><Link to="#" className="link">Corporate social responsibility</Link></li>
      	</ul>
      </div>
       <div className="store">
        <h5>About Edtronics</h5>
       	<ul>
       		<li><Link to="#" className="link">Edtronics Info</Link></li>
       		<li><Link to="#" className="link">Newsroom</Link></li>
       		<li><Link to="#" className="link">Careers</Link></li>
       		<li><Link to="#" className="link">Recherches</Link></li>
       		<li><Link to="#" className="link">Press Info</Link></li>
       		<li><Link to="#" className="link">Investors</Link></li>
       		<li><Link to="#" className="link">Events</Link></li>
       		<li><Link to="#" className="link">Contact Edtronics</Link></li>
       	</ul>
       </div>
        	<div>
        	      <p className="para">Copyright © 2017 Edtronics Inc. All rights reserved</p>
        		<ul >
        			<li className="legal"><Link to="#" className="link">Privacy Policy</Link></li>
        			<li className="legal"><Link to="#" className="link">Terms of Use</Link></li>
        			<li className="legal"><Link to="#" className="link">Sales and Refunds</Link></li>
        			<li className="legal"><Link to="#" className="link">Legal</Link></li>
        			<li className="legal"><Link to="#" className="link">Site Map</Link></li>
        		</ul>
        	</div>
       </div>
);


}

export default Footer;
