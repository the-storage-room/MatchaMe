import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PhotoUpload from './PhotoUpload.jsx';
import Tags from './Tags.jsx';
import BioInfo from './BioInfo.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import SideNavbar from './SideNavbar.jsx'
import Button from '../globals/Button/index.jsx';
import Footer from '../globals/Footer/index.jsx';
import style from './AccountPage.css';
import actions from '../../../Redux/actions/account_page_actions';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      isFirstTimeUser: false,
      currentPage: 'bio',
      tagtype: undefined,
      renderButton: false,
      route: '',
      location: '',
      bio: '',
      month: '',
      day: '',
      year: '',
      gender: 0,
      pref: 0,
      tagsTemp: [],
    };
  }

  nextPage = {
    '/onboarding/bio': '/onboarding/tags/user',
    '/onboarding/tags/user': '/onboarding/tags/pref',
    '/onboarding/tags/pref': '/onboarding/photoupload',
    '/onboarding/photoupload': '/home',
    '/account/bio': '/account/tags/user',
    '/account/tags/user': '/account/tags/pref',
    '/account/tags/pref': '/account/photoupload',
    '/account/photoupload': '/home',
  }

  handleGenderChange = (update) => {
    this.setState(update);
  }

  handleBioInputChange = (update) => {
    this.setState(update);
  }

  onNextClick = (tagData) => {
    let { url } = this.props.match;
    this.props.history.push(this.nextPage[url])
    this.shouldRenderNextButton(false)

    let age = this.state.year + this.state.month + this.state.day;

    if (this.state.currentPage === 'bio') {
      this.props.updateBioData({
        location: this.state.location,
        bio: this.state.bio,
        gender: this.state.gender,
        preference: this.state.pref,
        age: age,
      })
    } else if (this.state.currentPage === 'tags') {
      this.props.updateTagsData(this.state.tagtype, this.state.tagsTemp);
    } else if (this.state.currentPage === 'photoupload') {
      this.props.updateSignupStatus();
    }
  }

  shouldRenderNextButton = (bool) => {
    let { renderButton } = this.state
    if (renderButton !== bool) {
      this.setState({
        renderButton: bool
      })
    }
  }

  setIndexState = (bio, age) => {
    this.setState(bio);
    age && this.setState(age);
  }

  componentWillMount = () => {
    let route = this.props.match.path.slice(1,8);
    let { page, tagtype } = this.props.match.params;
    this.setState({
      currentPage: page,
      tagtype: tagtype,
      route: route
    })
  }

  render () {
    let pages = {
      bio: <BioInfo
        renderButton={this.shouldRenderNextButton}
        handleBioInputChange={this.handleBioInputChange}
        handleGenderChange={this.handleGenderChange}
        setIndexState={this.setIndexState}
        />,
      tags: <Tags 
        type={this.props.match.params.tagtype} 
        renderButton={this.shouldRenderNextButton}
        setIndexState={this.setIndexState}
        />,
      photoupload: <PhotoUpload 
        renderButton={this.shouldRenderNextButton}
        />
    }

    return (
      <div>
        {
          (this.state.route === 'account') && 
          <div><Navbar /></div>
        }
          <SideNavbar 
            history={this.props.history}
            currentPage={this.state.currentPage}
            tagtype={this.state.tagtype}
            route={this.state.route}
            />
        <div className={style.body}>
          <div className={style.holder}>
          {pages[this.props.match.params.page]}
          { 
          this.state.renderButton
          ? <Button 
              className={'save'}
              onClick={this.onNextClick}
              text={"Save and Continue"}
              />
          :
          <Button 
            className={'disabled'}
            text={"Save and Continue"}
            />
        }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSignupStatus: actions.updateSignupStatus,
    updateBioData: actions.updateBioData,
    updateTagsData: actions.updateTagsData,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    location: state.bioData.location
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
