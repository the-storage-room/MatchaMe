import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to the database!');
});

module.exports = db;
