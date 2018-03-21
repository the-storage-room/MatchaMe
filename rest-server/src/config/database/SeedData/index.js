import { Pool } from 'pg';

const config = {
  user: 'root',
  host: 'localhost',
  database: 'MatchMe',
  password: '',
  port: 5432
};

const db = new Pool(config);

db.on('connect', () => {
  console.log('Connected to Database Successfully');
});

import userData from './users_dummy_data.json';

const insertUsersData = async () => {
  try {
    console.log(userData);

    console.log('Created User Data');
  } catch (err) {
    console.log('Error Inserting User Data', err);
  }
};

const setup = async () => {
  try {
    await db.connect();
    await insertUsersData();
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

setup();
