import React, { Component } from 'react';

import style from './MyMatch.css';
import Button from '../globals/Button/index.jsx';

class WarningBox extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className={style.warningBackdrop}>
        <div className={style.warningBox}>
          <div className={style.warningText}>
            Are you sure? You will NEVER see this person again!
          </div>
            <Button 
              onClick={() => this.props.endMatch()}
              text={"Yes. END MATCH"}
              />
            <Button 
              onClick={this.props.onClose}
              text={"NO. Go Back!"}
              className={'red'}
              />
        </div>
      </div>
    );
  }
}

export default WarningBox;