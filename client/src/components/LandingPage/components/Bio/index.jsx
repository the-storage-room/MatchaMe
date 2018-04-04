import React from 'react';
import { withRouter } from 'react-router-dom';

import HomeNav from '../HomeNav/index.jsx';

class Bio extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className={style.wrapper}>
        {/* <header> 
          <div className={style.logo}>
            <button className={style.joinButton}>join</button>
            MatchaMe
          </div> 
        </header>
        <HomeNav />
        <div >
          
        </div>
        <footer>
        </footer> */}
        hi
      </div>
    );
  }
}

export default withRouter(Bio);