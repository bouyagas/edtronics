import React from 'react';
import { Link } from 'react-router';
import './NavBar.css';

const NavaBar = (props) => {

	return (
      <div id="navbar">
        <div className="nav">
        	<ul>
        		<li><Link to="/" className="navlink logo" >Edtronics</Link></li>
            <section className="product">
        		<li><Link to="#" className="navlink">Kindergarten</Link></li>
        		<li><Link to="#" className="navlink">K-12</Link></li>
        		<li><Link to="#" className="navlink">Higher Education</Link></li>
        		<li><Link to="#" className="navlink">Technical Institution</Link></li>
        		<li><Link to="#" className="navlink">Support</Link></li>
        		<li><Link to="#" className="navlink">SignUp</Link></li>
        		<li><Link to="#" className="navlink">LogIn</Link></li>
             </section>
        	</ul>
        </div>
      </div>
	);


}

export default NavaBar;
