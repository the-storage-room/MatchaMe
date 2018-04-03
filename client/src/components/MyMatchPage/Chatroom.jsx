import React, { Component } from 'react';

import style from './MyMatch.css';
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
    if (this.state.message.length > 0) {
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
  }

  handleTextareaChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  }


  render() {
    const chatFeed = this.state.chatFeed.slice(-100);
    return (
      <div className={style.chatRoom}>
        <div className={style.chatHeader}>
          <div 
            onClick={() => this.props.toggleProfile()}
            >
          <img 
            className={style.theirAvatarHeader}
            src={this.props.theirPhoto}
            />
            {this.props.user2firstname}
          </div>
        </div>
        <div className={style.chatFeed}>
          { !this.props.isSuccessful &&
              <div className={style.waiting}>waiting for your match to accept...</div>
          }
          {
            chatFeed
              .map((chat, i) => {
                return (
                  <ChatItem
                    key={i}
                    chat={chatFeed[chatFeed.length - 1 - i]}
                    username={this.props.username}
                    theirPhoto={this.props.theirPhoto}
                    yourPhoto={this.props.yourPhoto}
                    />
                  )
              })
          }
        </div>
        <div className={style.chatBox}>
          <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="chatTextarea"
            autoComplete="off"
            placeholder="Say something!"
            className={style.textbox}
            onChange={this.handleTextareaChange}
            />
          </form>
          <div className={style.enter}>
            <Button
              text={"Enter"}
              className={"small"}
              onClick={() => this.submitMessage()}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;