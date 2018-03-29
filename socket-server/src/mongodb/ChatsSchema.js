
import db from './index';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatsSchema = new Schema({
  room: { type: String, unique: true },
  messages: [{ type: String }],
});

const Chats = mongoose.model('Chats', chatsSchema);

module.exports = Chats;
