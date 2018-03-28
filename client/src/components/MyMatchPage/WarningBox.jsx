import React, { Component } from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

class WarningBox extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className={style.warningBackdrop}>
        <div className={style.warningBox}>
          <div>
            Are you sure? You will NEVER see this person again!
            <Button 
              onClick={() => this.props.endMatch()}
              text={"Yes. END MATCH"}
              />
            <Button 
              onClick={this.props.onClose}
              text={"NO. Go Back!"}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default WarningBox;