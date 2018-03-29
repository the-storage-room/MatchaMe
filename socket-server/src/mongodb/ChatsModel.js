import Chats from './ChatsSchema';
import db from './index';
import mongoose from 'mongoose';

module.exports = {
  addChatroom: (room) => {
    const newChatRoom = new Chats({
      room: room,
      messages: []
    });
    return newChatRoom.save();
  },
  addChatMessage: (text, room) => {
    Chats.findOneAndUpdate(
      { "room": room },
      { $push: { messages: text } },
    ).exec(console.log('help'));
  },
  fetchChats: (room) => {
    return Chats.find({ "room": room }).exec();
  },
}