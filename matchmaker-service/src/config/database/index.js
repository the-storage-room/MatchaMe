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
  console.log('Matchmaker service connected to database')
});

module.exports = db;