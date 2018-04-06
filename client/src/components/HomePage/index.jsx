import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './HomePage.css';
import Avatar from '../globals/Avatar/index.jsx';
import Footer from '../globals/Footer/index.jsx';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className={style.wrapper}>
          <header className={style.header}>
            <div className={style.logo}>
              MatchaMe
            </div>  
          </header>
          <div 
            className={style.column1}
            onClick={() => this.props.history.push('/mymatch')}
            >
            <img 
              className={style.photo}
              src={'https://s3-us-west-1.amazonaws.com/ajjjthesis/matchame-romance.jpg'}/>
            <div className={style.overlay}>
            </div>
              <div className={style.text}>See Your Match!</div>
          </div>
          <div 
            className={style.column2}
            onClick={() => this.props.history.push('/matchmaker')}
            >
            <img 
              className={style.photo}
              src={'https://s3-us-west-1.amazonaws.com/ajjjthesis/matchame-matchmaker.jpg'}/>
            <div className={style.overlay}>
            </div>
              <div className={style.text}>Matchmaker!</div>
          </div>
          <div 
            className={style.column3}
            onClick={() => this.props.history.push('/rate')}
            >
            <img 
              className={style.photo}
              src={'https://s3-us-west-1.amazonaws.com/ajjjthesis/matchame-judge.jpg'}/>
            <div className={style.overlay}>
            </div>
              <div className={style.text}>Rate Others!</div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default HomePage;
