
import React, { Component } from 'react';
import axios from 'axios';

import style from './Tags.css';


class Tags extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className={style.basicMargin}>
          Describe yourself:
        </div>
        <div className={style.basicMargin}>
          Describe your IDEAL mate:
        </div>
        <div className={style.basicMargin}>
          Box of Tags
        </div>
      </div>
    )
  }
}

export default Tags;
