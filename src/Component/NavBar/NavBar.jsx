import React from 'react';
import { Link } from 'react-router';
import './NavBar.css';

const NavaBar = (props) => {

	return (
      <div id="navbar">
        <div className="nav">
        	<ul>
        		<li><Link to="/" className="navlink">Edtronics</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        	</ul>
        </div>
      </div>
	);


}

export default NavaBar;
