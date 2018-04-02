import React from 'react';

import style from './MyMatch.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
import Footer from '../globals/Footer/index.jsx';
import Navbar from '../globals/Navbar/index.jsx';

const NoMatch = ({ checkForNewMatch }) => {
  return (
    <div>
      <div className={style.nomatchwrapper}>
        <div className={style.header}>
          <Navbar />
        </div>
        <div className={style.noMatch}>
          <div className={style.noMatchText}>
            You have no match!
          </div>
          <Button 
            text={"Refresh"}
            onClick={() => checkForNewMatch()}
            />
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default NoMatch;