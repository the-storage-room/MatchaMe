import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Main.css';
import HomeNav from '../HomeNav/index.jsx';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return (
      <div className={style.wrapper}>
        <header> 
          <div className={style.logo}>
            <button className={style.joinButton}>join</button>
            MatchaMe
          </div> 
        </header>
        <HomeNav />
        <div >
          <img 
            className={style.boatPhoto}
            src="https://c2.staticflickr.com/4/3111/3123004665_5cd4f1eafc_o.jpg"
            height="653px"
            width="1080px"
          />
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default withRouter(Main);