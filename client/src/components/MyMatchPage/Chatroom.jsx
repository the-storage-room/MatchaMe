import React, { Component } from 'react';

import style from './MyMatchPage.css';
import Button from '../globals/Button/index.jsx';

class Chatroom extends Component {
  constructor() {
    super();
    this.state = {
      chatFeed: [],
      message: '',
    }
  }

  componentDidMount = () => {
    const { socket } = this.props;
    socket.on('connect', () => {
      socket.emit('client.ready');
    });

    socket.on('server.initialState', (data) => {
      this.setState({
        chatFeed: data
      });
    });

    socket.on('server.chat', ( newMessage ) => {
      console.log(newMessage)
      var temp = newMessage.message
      this.setState({ chatFeed: [...this.state.chatFeed, temp]});
    })
  }

  submitMessage = () => {
    const { message } = this.state;
    const { socket } = this.props;
    socket.emit('client.chat',  {message: message } )
    this.setState({
      message: '',
    })
    document.getElementById('chatTextarea').value = '';
  }

  handleTextareaChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      <div className={style.chatRoom}>
        <div className={style.chatFeed}>
          <div className={style.chatFeedarea}>
          </div>
        </div>
        <div className={style.chatBox}>
          <textarea
            id='chatTextarea'
            className={style.textbox}
            onChange={this.handleTextareaChange}
            />
          <Button
            text={"Enter"}
            className={"tag"}
            onClick={() => this.submitMessage()}
            />
        </div>
      </div>
    );
  }
}

export default Chatroom;