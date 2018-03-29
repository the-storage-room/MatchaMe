import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const chatsSchema = new Schema({
  room: Number,
  chats: [{}]
});

const Chats = mongoose.model('Comment', chatsSchema);

module.exports = Chats;
