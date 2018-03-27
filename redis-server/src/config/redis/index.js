import redis from 'redis';
import axios from 'axios';

export const client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis Server');
  setInterval(getAllRanks, 1000 * 60 * 55);
});

const { REST_SERVER_URL } = process.env;

const getAllRanks = () => {
  client.ttl('leaderboard', async (err, timeLeft) => {
    if (err) console.log(err);
    try {
      if (timeLeft < 0) {
        const time = client.ttl('leaderboard');
        console.log(time);
        const { data } = await axios.get(
          `${REST_SERVER_URL}/api/users/fetchAllUsers/`
        );
        for (let user of data) {
          client.lpush('leaderboard', JSON.stringify(user), (err, rank) => {
            if (err) console.log(err);
            client.set(`${user.id}`, rank);
          });
        }
        client.expire('leaderboard', 60);
      } else {
        console.log('Already done!');
      }
    } catch (err) {
      console.log('Error with axios request', err);
    }
  });
};
