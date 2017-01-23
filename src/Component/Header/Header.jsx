import React from 'react';
import './Header';

const Header = (props) => {
	return (
      <div>
        <h1> Welcome to Edtronics </h1>
         <p>{props.header}</p>
      </div>
	);

}

export default Header;
