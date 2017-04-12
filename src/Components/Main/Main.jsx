import React from 'react';
import './Main.css';

const Main = (props) => {
	return (
     <div id="main">
       <h1>Welcome to <span>EDTRONICS</span></h1>
        <p>The world's leading education technology company</p>
        <div className="">
          <iframe frameborder="0" height="100%" width="1435px"
                  src="https://www.youtube.com/embed/uZ73ZsBkcus">
          </iframe>
        </div>

     </div>
	);
}

export default Main;
