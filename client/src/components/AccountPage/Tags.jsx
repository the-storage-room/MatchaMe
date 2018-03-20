
import React, { Component } from 'react';

import style from './AccountPage.css';

import tagsArr from './tagsArr';


class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      tagtype: '',
    };
  }

  componentWillMount() {
    this.setState({
      tags: tagsArr,
      tagtype: this.props.type
    })
  }

  render() {
    console.log(this.state)
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
