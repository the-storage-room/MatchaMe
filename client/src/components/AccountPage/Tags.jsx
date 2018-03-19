
import React, { Component } from 'react';

import style from './AccountPage.css';

import tagsArr from './tagsArr';


class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    this.setState({
      tags: tagsArr
    })
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
