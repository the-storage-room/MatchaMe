import React, { Component } from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

class Chatroom extends Component {
  constructor() {
    super();
    this.state = {
      chatFeed: [],
    }
  }

  componentDidMount() {
    const { socket } = this.props;
    socket.on('connect', () => {
      socket.emit('client.ready');
    });
    
    socket.on('server.initialState', (data) => {
      console.log(data)
      this.setState({

      });
    });
  }

  render() {
    return (
      <div className={style.chatRoom}>
        <div className={style.chatFeed}>
          <div className={style.chatFeedarea}>
          </div>
        </div>
        <div className={style.chatBox}>
          <div className={style.chatTextarea}>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;