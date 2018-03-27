import redis from 'redis';
import axios from 'axios';
import Promise from 'bluebird';

const client = Promise.promisifyAll(redis.createClient());

client.on('connect', () => {
  console.log('Connected to Redis Server');
  setInterval(getAllRanks, 1000 * 60);
  getAllRanks();
});

const { REST_SERVER_URL } = process.env;

const getAllRanks = async () => {
  try {
    let timeLeft = await client.ttlAsync('leaderboard');
    if (timeLeft < 15) {
      console.log(timeLeft);
      const { data } = await axios.get(
        `${REST_SERVER_URL}/api/users/fetchAllUsers/`
      );
      for (let user of data) {
        let rank = await client.rpushAsync('leaderboard', JSON.stringify(user));
        client.setex(`${user.id}`, 60, rank);
      }
      client.expire('leaderboard', 60);
    } else {
      console.log('Already done!');
    }
  } catch (err) {
    console.log('Error with retrieving users', err);
  }
};

export default client;
