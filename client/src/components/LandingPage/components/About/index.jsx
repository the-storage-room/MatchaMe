import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './About.css';
import Header from '../Header/index.jsx'; 
import Footer from '../../../globals/Footer/index.jsx';
import Button from '../../../globals/Button/index.jsx';

class About extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    console.log("https://i.imgur.com/jv8cBN8.jpg")
  }

  render () {
    return (
      
      <div className={style.wrapper}>  
        <Header />
        
        <div className={style.photosContainer}>
          <div className={style.leftMainPhoto}>
            <img 
              className={style.leftMainPhotoSize}
              src="https://i.imgur.com/jv8cBN8.jpg"
            />
          </div>
          <div className={style.rightMainPhoto}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/wW0SmpE.jpg"
            />
          </div>
          <br />
          <br />
          
        </div>
        <div className={style.firstCaption}>
          <h4>Find true love through <span>MatchaMe</span>.</h4>
        </div> 
        <div className={style.firstInfoContainer}>
          <div className={style.rightSecondPhoto}>
            <img 
              className={style.rightSecondPhotoSize}
              src="https://i.imgur.com/qcdhu0W.jpg"
            />
          </div>
          <div className={style.firstInfo}>
           <p> MatchaMe is powered by an algorithm that selects partners based on <span>your</span> settings. </p>
           <p> Other users then vote to determine your final match.</p>
           <p> This means that each potential partner is guaranteed to be the perfect one for <span>you</span>. </p>
          </div>
        </div>
        <div className={style.secondCaption}>
          <h4> Meet the person of <span>your</span> dreams.</h4>
        </div> 
        <div className={style.secondInfoContainer}>
          <div className={style.leftThirdPhoto}>
            <img
              className={style.leftThirdPhotoSize}
              src="https://i.imgur.com/QihBxqW.jpg"
            />
          </div>
          <div className={style.secondInfo}>
            <p> <span>MatchaMe</span> was developed using React and Node.js. </p>
            <p> Our team of dedicated engineers are constantly improving the <span>MatchaMe</span> experience.</p>
            <p> You can meet them <a href="/bio">here</a>. </p>
          </div>
        </div>
          <br />
          <br />
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
    )
  }
}

export default withRouter(About);