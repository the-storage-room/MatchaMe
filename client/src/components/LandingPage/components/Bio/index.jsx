import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Bio.css';
import Header from '../Header/index.jsx';
import Footer from '../../../globals/Footer/index.jsx';
import Button from '../../../globals/Button/index.jsx';

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
          <div className={style.alicePhoto}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/NE1lYL2.jpg"
            />
            <div className={style.overlay}>
              <div className={style.text}> hi i'm alice </div>
            </div>
          </div>
          <div className={style.jackPhoto}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/hfTiO6g.jpg"
            />
            <div className={style.overlay}>
              <div className={style.text}> hi i'm jack </div>
            </div>
          </div>
          <div className={style.justinPhoto}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/fwh9Mth.jpg"
            />
            <div className={style.overlay}>
              <div className={style.text}> hi i'm justin </div>
            </div>
          </div>
          <div className={style.jonPhoto}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/idx90oT.jpg"
            />
            <div className={style.overlay}>
              <div className={style.text}> hi i'm jon </div>
            </div>
          </div>
        </div>
        <div className={style.join}>
          Discover your match today.
          <div>
            <Button
              text="Join"
              onClick={() => this.props.history.push('/signup')}
            />
          </div>
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default withRouter(Bio);