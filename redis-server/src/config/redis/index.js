import redis from 'redis';
import axios from 'axios';
import Promise from 'bluebird';
import cron from 'cron';

const client = Promise.promisifyAll(redis.createClient());
const CronJob = cron.CronJob;

client.on('connect', () => {
  console.log('Connected to Redis Server');
  job.start();
});

const { REST_SERVER_URL } = process.env;

var job = new CronJob({
  cronTime: '* 0 * * * ',
  onTick: async () => {
    try {
      client.flushall();
      const { data } = await axios.get(
        `${REST_SERVER_URL}/api/users/fetchAllUsers/`
      );
      for (let user of data) {
        let rank = await client.rpushAsync('leaderboard', JSON.stringify(user));
        client.set(`${user.id}`, rank);
      }
      console.log('Job Finished!');
    } catch (err) {
      console.log('Error with retrieving users', err);
    }
  },
  start: true,
  timeZone: 'America/Los_Angeles'
});

export default client;
