import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Match.css';
import Header from '../Header/index.jsx';
import Footer from '../../../globals/Footer/index.jsx';

class Match extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
      </div> 
    );
  }
}

export default withRouter(Match);