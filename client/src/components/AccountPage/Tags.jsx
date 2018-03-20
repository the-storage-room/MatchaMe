
import React, { Component } from 'react';

import tagsArr from './tagsArr';
import TagItem from './TagItem.jsx'
import style from './AccountPage.css';


class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: tagsArr,
      user: ["Sport Enthusist", "Stoner", "Raver"],
      mate: ["Religious", "Thoughtful", "Adventerous"],
    };
  }

  render() {
    return (
      <div>
        <div className={style.basicMargin}>
          Tag Picker!
        </div>
        <div className={style.basicMargin}>
          Pick 3 Tags to Describe {this.props.type === 'user' ? 'YOURSELF' : 'YOUR IDEAL MATCH'}
        </div>
        <div className={style.basicMargin}>
          {
            this.state.tags.map((tag) => {
              let selected = this.state[this.props.type].includes(tag)
              return <TagItem tag={tag} key={tag} selected={selected}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default Tags;
