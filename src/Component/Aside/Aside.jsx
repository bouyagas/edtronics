import React from 'react';
import './Aside';

const Aside = (props) => {
	return (
      <div id="aside">
        <p>{props.aside}</p>
        <p>{props.name}</p>
      </div>
	);
};

Aside.propTypes = {
 aside: React.PropTypes.string.isRequired,
 name: React.PropTypes.string
};

Aside.defaultProps = {
  name: 'Stranger'
};

export default Aside;
