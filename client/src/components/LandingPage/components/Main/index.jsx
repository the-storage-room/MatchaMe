import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Main.css';
import Header from '../Header/index.jsx';
import Footer from '../../../globals/Footer/index.jsx';
import Button from '../../../globals/Button/index.jsx';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  
  render() {
    return (
      <div className={style.wrapper}>
        <Header props={this.props} />
        {/* <div className={style.mainCaption}>
          <h4>Find your perfect match.</h4>
        </div> */}
       
        <div className={style.mainPhotoContainer}>
          <img 
            className={style.mainPhoto}
            src="https://i.imgur.com/lCqj6w4.jpg"
          />
          
        </div>

        <div className={style.intro}>
          <h3> The world's first crowdsourced dating service </h3>
        </div>

        <div className={style.grid}>
          <div className={style.gridItem1}>
            Rate people based on how hot they are
          </div>
          <div className={style.gridItem2}>
            <img
              className={style.photo}
              src="https://i.imgur.com/vvpGPEk.png"
            />
          </div>
          <div className={style.gridItem3}>
            Think they make a good match? You decide.
          </div>
          <div className={style.gridItem4}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/tLHV3xN.png"
            />
          </div>
          <div className={style.gridItem5}>
            Follow and see where love takes each couple
          </div>
          <div className={style.gridItem6}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/qF5LR3P.png"
            />
          </div>
        </div>
        <div className={style.join}>
          Discover your match today.
          <div className={style.joinButton}>
            <Button
              text="Join"
              onClick={() => this.props.history.push('/signup')}
            />
          </div>
        </div>
        
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);