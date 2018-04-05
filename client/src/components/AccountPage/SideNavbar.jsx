import React from 'react';

import style from './AccountPage.css';

const SideNavbar = ({ history, currentPage, tagtype, route }) => {


  const generateClass = (page) => {
    if (page === currentPage || page === tagtype) {
      return 'activenavbutton'
    } else if (route === 'account'){
      return 'navbutton'
    } else {
      return 'onboardnavbutton'
    }
  }

  const clickIfNotOnboarding = (path) => {
    route === 'account' && history.push(path)
  }


  return (
    <div className={style.sidenav}>
      <div
        className={style[generateClass('bio')]}
        onClick={() => clickIfNotOnboarding('/account/bio')}
        >
        Basic Info
      </div>
      <div
        className={style[generateClass('user')]}
        onClick={() => clickIfNotOnboarding('/account/tags/user')}
        >
        Your Tags
      </div>
      <div
        className={style[generateClass('pref')]}
        onClick={() => clickIfNotOnboarding('/account/tags/pref')}
        >
        Match Tags
      </div>
      <div
        className={style[generateClass('photoupload')]}
        onClick={() => clickIfNotOnboarding('/account/photoupload')}
        >
        Photo Upload
      </div>
    </div>
  );
};

export default SideNavbar;