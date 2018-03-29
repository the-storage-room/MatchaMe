import Chats from './ChatsSchema';

module.exports = {
  addChatroom: (input, callback) => {
    const newChatRoom = new Chats({
      room: input.room,
      chats: []
    });
    newChatRoom.save(callback());
  },
  addChatMessage: (input, callback) => {
    Chats.findOneAndUpdate(
      { room: input.room },
      { $push: { chats: input.chat } },
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
}