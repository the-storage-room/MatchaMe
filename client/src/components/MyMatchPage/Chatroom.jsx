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
    return (
      <div className={style.chatRoom}>
        <div className={style.chatFeed}>
          {
            this.state.chatFeed
              .map((chat, i) => {
                return (
                  <ChatItem
                    key={i}
                    chat={chat}
                    />
                )
              })
          }
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