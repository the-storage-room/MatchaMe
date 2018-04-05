import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Main.css';
import Header from '../Header/index.jsx';
import Footer from '../../../globals/Footer/index.jsx';

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
        <div className={style.mainPhotoContainer}>
          <img 
            className={style.mainPhoto}
            src="https://i.imgur.com/lCqj6w4.jpg"
          />
          
        </div>
        
        <div className={style.mainCaption}>
          <h4>Find your perfect match.</h4>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);