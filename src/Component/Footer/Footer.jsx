import React from 'react';
import './Footer';

const Footer = (props) => {
	return (
      <div id="footer">
        <h1>{props.footer}</h1>
        <p>{props.myName}</p>
      </div>
	);


}

export default Footer;
