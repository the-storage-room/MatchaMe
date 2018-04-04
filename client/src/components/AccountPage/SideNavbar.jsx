import React from 'react';

import style from './AccountPage.css';

const SideNavbar = ({ history, currentPage, tagtype }) => {


  const generateClass = (page) => {
    if (page === currentPage || page === tagtype) {
      return 'activenavbutton'
    } else {
      return 'navbutton'
    }
  }


  return (
    <div className={style.sidenav}>
      <div
        className={style[generateClass('bio')]}
        onClick={() => history.push('/account/bio')}
        >
        Basic Info
      </div>
      <div
        className={style[generateClass('user')]}
        onClick={() => history.push('/account/tags/user')}
        >
        Your Tags
      </div>
      <div
        className={style[generateClass('pref')]}
        onClick={() => history.push('/account/tags/pref')}
        >
        Match Tags
      </div>
      <div
        className={style[generateClass('photoupload')]}
        onClick={() => history.push('/account/photoupload')}
        >
        Photo Upload
      </div>
    </div>
  );
};

export default SideNavbar;