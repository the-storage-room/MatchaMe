import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Header.css';
import HomeNav from '../HomeNav/index.jsx';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  //console.log(props)
  render() {
    return (
      <div>
        <header>
          <div className={style.headerContainer}>
           
            <div 
              className={style.logo}
              onClick={() => this.props.history.push('/')}
            >
              MatchaMe
            </div> 
            <div 
              className={style.login}
              onClick={() => this.props.history.push('/login')}
            >
              Login
            </div> 
          </div>
          
        </header>
        <HomeNav />
      </div>
    );
  }
};

export default withRouter(Header);

