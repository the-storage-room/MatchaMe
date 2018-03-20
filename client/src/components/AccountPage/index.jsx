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
      currentPage: null,
      tagtype: null,
    };
  }

  nextPage = {
    '/account/bio': '/account/tags/user',
    '/account/tags/user': '/account/tags/mate',
    '/account/tags/mate': '/account/photoupload',
    '/account/photoupload': '/dashboard'
  }

  onNextClick = async () => {
    let currentLocation = this.props.location.pathname
    await this.props.history.push(this.nextPage[currentLocation])
    if (currentLocation !== '/account/photoupload') {
      const { page, tagtype } = this.props.match.params;
      this.setState({
        currentPage: page,
        tagtype: tagtype
      })
    }
  }

  componentWillMount = () => {
    const { page, tagtype } = this.props.match.params;
    this.setState({
      currentPage: page,
      tagtype: tagtype
    })
  }

  render () {
    let pages = {
      bio: <BioInfo />,
      tags: <Tags type={this.state.tagtype}/>,
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
          {pages[this.state.currentPage]}
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
