import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Experience.css';
import Header from '../Header/index.jsx';
import Footer from '../../../globals/Footer/index.jsx';

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className={style.grid}>
          <div className={style.gridItem1}>
            Rate a person based on how hot you think they are
          </div>
          <div className={style.gridItem2}>
            <img
              className={style.photo}
              src="https://i.imgur.com/Bj3lBxt.png"
            />
          </div>
        </div>
        <Footer />
      </div> 
    );
  }
}

export default withRouter(Experience);