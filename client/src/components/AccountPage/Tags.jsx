
import React, { Component } from 'react';

import tagsArr from './tagsArr';
import TagItem from './TagItem.jsx'
import style from './AccountPage.css';


class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: tagsArr,
      user: [],
      mate: ["Stoner","Neat Freak"],
    };
  }

  addToTagArray = (tag) => {
    let { type } = this.props
    let array = this.state[type]
    if (array.includes(tag)) {
      array.splice(array.indexOf(tag), 1);
      this.props.renderButton(false)
    } else if (array.length < 3) {
      array.push(tag)
      if (array.length === 3) {
        this.props.renderButton(true)
      }
    }
    this.setState({
      type: array
    })
  }

  componentDidUpdate = () => {
    let { type } = this.props
    let array = this.state[type];
    this.props.renderButton(array.length === 3);
    }

  render() {
    return (
      <div>
        <div className={style.basicMargin}>
          Tag Picker!
        </div>
        <div className={style.basicMargin}>
          Pick 3 Tags to Describe 
          {
            this.props.type === 'user' 
            ? 'YOURSELF' 
            : 'YOUR IDEAL MATCH'
          }
        </div>
        <div className={style.basicMargin}>
          {
            this.state.tags.map((tag) => {
              let { type } = this.props
              let selected = this.state[type].includes(tag)
              return <TagItem 
                tag={tag} 
                key={tag} 
                selected={selected} 
                onClick={this.addToTagArray} 
                />
            })
          }
        </div>
      </div>
    )
  }
}

export default Tags;
