import React, { Component } from 'react';

import style from './MyMatchPage.css';
import Button from '../globals/Button/index.jsx';
import ChatItem from './ChatItem.jsx';

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
      const { messages } = data.chatHistory[0];
      const oldChats = messages
        .map(chat => JSON.parse(chat))
      this.setState({
        chatFeed: oldChats
      });
    });

    socket.on('server.chat', ( newMessage ) => {
      var temp = JSON.parse(newMessage)
      this.setState({ chatFeed: [...this.state.chatFeed, temp]});
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.submitMessage();
  }

  submitMessage = () => {
    const { message } = this.state;
    const { socket, username, firstname } = this.props;
    const time = Date.now()
    socket.emit('client.chat', JSON.stringify({
        message,
        username,
        firstname,
        time
      })
    )
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
    const { chatFeed } = this.state;
    return (
      <div className={style.chatRoom}>
        <div className={style.chatFeed}>
          {
            chatFeed
              .map((chat, i) => {
                while (i < 100 && i < chatFeed.length - 1) {
                return (
                  <ChatItem
                    key={i}
                    chat={chatFeed[chatFeed.length-i-1]}
                    username={this.props.username}
                    theirPhoto={this.props.theirPhoto}
                    yourPhoto={this.props.yourPhoto}
                    />
                  )
                }
              })
          }
        </div>
        <div className={style.chatBox}>
          <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="chatTextarea"
            autoComplete="off"
            className={style.textbox}
            onChange={this.handleTextareaChange}
            />
          </form>
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