
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../Redux/actions/account_page_actions';
import tagsArr from './tagsArr';
import Button from '../globals/Button/index.jsx';
import style from './AccountPage.css';


class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tagsTemp: [],
    };
  }

  addToTagArray = (tag) => {
    const { type, tagsData } = this.props
    const tagsArray = tagsData[type]
    if (tagsArray && tagsArray.includes(tag)) {
      tagsArray
        .splice(tagsArray
          .indexOf(tag), 1);
      this
        .props
        .renderButton(false);
      this
        .setState(
          {tagsTemp: tagsArray}
        )
        this.props.setIndexState({tagsTemp: tagsArray});
    } else if (
      tagsArray.length < 3
    ) {
      tagsArray.push(tag);
      this.setState({tagsTemp: tagsArray})
      this.props.setIndexState({tagsTemp: tagsArray});
      if ( tagsArray.length === 3 ) {
        this.props
          .renderButton(true);
      }
    }
  }

  componentDidMount = () => {
    const { type } = this.props;
    const tagsArray = this.props.tagsData[type];
    const tagsTemp = { 
      tagsTemp: tagsArray,
    }
    this.setState(tagsTemp);
    this.props.setIndexState(tagsTemp);
  }

  componentDidUpdate = () => {
    let { type } = this.props;
    let  tagsArray  = this.props.tagsData[type];
    this.props.renderButton(tagsArray.length === 3);
  }
  
  render() {
    return (
      <div>
        <div className={style.tagHead}>
          {
            this.props.type === 'user' 
            ? ' I am a...' 
            : 'My Ideal Match is a...'
          }
        </div>
        <div className={style.basicMargin}>
          {
            tagsArr.map((tag) => {
              let selected = this.props.tagsData[this.props.type].includes(tag)
              return <Button 
                text={tag} 
                key={tag} 
                className={selected ? 'selected' : 'tag'} 
                onClick={() => this.addToTagArray(tag)} 
                />
            })
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tagsData: state.tags,
  };
}

export default connect(mapStateToProps)(Tags);