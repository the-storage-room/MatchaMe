import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PhotoUpload from './PhotoUpload.jsx';
import Tags from './Tags.jsx';
import BioInfo from './BioInfo.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';

import style from './AccountPage.css';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      isFirstTimeUser: true,
      currentPage: 'bio',
      tagtype: null,
    };
  }

  nextPage = {
    '/account/bio': '/account/tags/user',
    '/account/tags/user': '/account/tags/mate',
    '/account/tags/mate': '/account/photoupload',
    '/account/photoupload': '/dashboard'
  }

  onNextClick = () => {
    let { pathname } = this.props.location;
    this.props.history.push(this.nextPage[pathname])
  }

  setInitialState = () => {
    let { page, tagtype } = this.props.match.params;
    this.setState({
      currentPage: page,
      tagtype: tagtype
    })
  }

  componentWillMount = () => {
    this.setInitialState()
  }

  render () {
    let pages = {
      bio: <BioInfo />,
      tags: <Tags type={this.props.match.params.tagtype}/>,
      photoupload: <PhotoUpload />
    }

    return (
      <div>
        {
          this.state.isFirstTimeUser
          ? null
          : <Navbar />
          }
        <div className={style.body}>
          {pages[this.props.match.params.page]}
        <Button 
          className={style.nextBtn}
          text={'Next Button'}
          onClick={this.onNextClick}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Account);
