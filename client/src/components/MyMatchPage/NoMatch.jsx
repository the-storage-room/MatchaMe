import React from 'react';

import style from './MyMatch.css';
import Button from '../globals/Button/index.jsx';
import Footer from '../globals/Footer/index.jsx';
import Navbar from '../globals/Navbar/index.jsx';

const NoMatch = ({ checkForNewMatch }) => {
  return (
    <div>
      <Navbar />

      <div className={style.noMatch}>
        <div className={style.noMatchText}>
          You have no match!
          </div>
        <Button
          text={"Refresh"}
          onClick={() => checkForNewMatch()}
        />
      </div>

      <Footer />
    </div>
  );
}

export default NoMatch;