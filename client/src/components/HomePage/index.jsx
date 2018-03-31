import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import style from './HomePage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Avatar from '../globals/Avatar/index.jsx';
// import image1 from '../../../public/images/matchame1.jpg'

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
            src={window.location.origin + '/images/matchame-romance.jpg'}/>
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
            src={window.location.origin + '/images/matchame-matchmaker.jpg'}/>
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
            src={window.location.origin + '/images/matchame-judge.jpg'}/>
          <div className={style.overlay}>
          </div>
            <div className={style.text}>Rate Others!</div>
        </div>
        </div>
        <footer className={style.footer}>
          COPYRIGHT the-storage-room 2018
        </footer>
      </div>
    )
  }
}

{/* const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
} */}

const mapStateToProps = (state) => {
  return {
    photos: state.userPhotos
  };
}

export default withRouter(connect(mapStateToProps)(HomePage));
