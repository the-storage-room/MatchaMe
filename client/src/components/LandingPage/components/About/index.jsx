import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './About.css';
import Header from '../Header/index.jsx'; 
import Footer from '../../../globals/Footer/index.jsx';

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
        <Header props={this.props} />
        <div className={style.photosContainer}>
          <div className={style.gridItem1}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/jv8cBN8.jpg"
            />
          </div>
          <div className={style.gridItem2}>
            <img 
              className={style.photo}
              src="https://i.imgur.com/wW0SmpE.jpg"
            />
          </div>
        </div>
        <div>
           
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(About);