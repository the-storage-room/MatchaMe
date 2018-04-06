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
        <div className={style.mainCaption}>
          <h4>Find your perfect match.</h4>
        </div> 
        <div className={style.firstInfoContainer}>
          <div className={style.rightSecondPhoto}>
            <img 
              className={style.rightSecondPhotoSize}
              src="https://i.imgur.com/qcdhu0W.jpg"
            />
          </div>
          <div className={style.firstInfo}>
           <p className={style.firstInfo_p1}> MatchaMe is powered by an algorithm that selects partners based on <span>your</span> settings. </p>
           <p className={style.firstInfo_p2}> This means that each match is guaranteed to be the perfect one for <span>you</span>. </p>

          </div>
          <br />
          <br />
          
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
    )
  }
}

export default withRouter(About);