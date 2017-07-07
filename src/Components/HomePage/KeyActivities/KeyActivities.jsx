import React from 'react';

export default class KeyActivities extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activity: 'Key Activities'
    }
  }

  render() {
    return (
      <div id="activity">
      	<h1 className="center">{this.state.activity}</h1>
      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae impedit assumenda nobis nisi, quis nostrum? Possimus fugiat illum doloribus, illo commodi vel omnis velit dolorum recusandae, laborum adipisci, animi.</p>
      </div>
    );
  }
}
