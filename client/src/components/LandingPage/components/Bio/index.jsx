import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Bio.css';
import Header from '../Header/index.jsx';
import Footer from '../../../globals/Footer/index.jsx';

class Bio extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <p className={style.bioIntro}> 
          Meet the talented engineers who created MatchaMe </p>
          
          
        <div className={style.grid}>
          <div className={style.gridItem1}>
           
          </div>
          <br />
          <br />
          <div className={style.gridItem2}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/NE1lYL2.jpg"
              height="200px"
              width="300px"
            />
            {/* <div className={style.overlay}></div>
            <div className={style.alice}> hi i'm alice </div> */}
          </div>
          <div className={style.gridItem3}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/hfTiO6g.jpg"
              height="200px"
              width="300px"
            />
          </div>
          <div className={style.gridItem4}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/fwh9Mth.jpg"
              height="200px"
              width="300px"
            />
          </div>
          <div className={style.gridItem5}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/idx90oT.jpg"
              height="200px"
              width="300px"
            />
          </div>
          
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default withRouter(Bio);