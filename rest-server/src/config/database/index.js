import { Pool } from 'pg';
// import Promise from 'bluebird';
require('dotenv').config();


const config = {
  user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
  host: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
  database: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE,
  password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD,
  port: process.env.NODE_ENV === 'production' ? process.env.AWS_PORT : process.env.LOCAL_PORT,
};

const db = new Pool(config);

db.on('connect', () => {
  console.log('Connected to Database Successfully');
});

db.connect();
// Promise.promisifyAll(db);

module.exports = db;
