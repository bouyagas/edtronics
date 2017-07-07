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
      	<h3 className="center">{this.state.activity}</h3>
      </div>
    );
  }
}
