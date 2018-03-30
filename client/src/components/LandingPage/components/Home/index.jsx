import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return (
      <div>
        HOME PAGE!
      </div>
    );
  }
}

export default withRouter(Home);