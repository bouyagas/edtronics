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
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
        		<li><Link to="#" className="navlink">hello</Link></li>
             </section>
        	</ul>
        </div>
      </div>
	);


}

export default NavaBar;
