import React from 'react';

import style from './AccountPage.css';

const SideNavbar = ({ history }) => {
  return (
    <div className={style.sidenav}>
      <div
        className={style.navbutton}
        onClick={() => history.push('/account/bio')}
        >
        Basic Info
      </div>
      <div
        className={style.navbutton}
        onClick={() => history.push('/account/tags/user')}
        >
        Your Tags
      </div>
      <div
        className={style.navbutton}
        onClick={() => history.push('/account/tags/mate')}
        >
        Match Tags
      </div>
      <div
        className={style.navbutton}
        onClick={() => history.push('/account/photoupload')}
        >
        Photo Upload
      </div>
    </div>
  );
};

export default SideNavbar;