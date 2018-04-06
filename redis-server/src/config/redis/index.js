import redis from 'redis';
import axios from 'axios';
import Promise from 'bluebird';
import cron from 'cron';

const client = Promise.promisifyAll(redis.createClient());

client.on('connect', () => {
  console.log('Connected to Redis Server');
  job.start();
  fetchData();
  console.log('JOB RUN STATUS: ', job.running);
  setInterval(
    () => console.log('JOB RUN STATUS: ', job.running),
    1000 * 60 * 60
  );
});

const CronJob = cron.CronJob;

const job = new CronJob({
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

const fetchData = async () => {
  try {
    client.flushall();
    const { data } = await axios.get(
      `${REST_SERVER_URL}/api/users/fetchAllUsers/`
    );
    for (let user of data) {
      let rank = await client.rpushAsync('leaderboard', JSON.stringify(user));
      client.set(`${user.id}`, rank);
    }
  } catch (err) {
    console.error('Error with retrieving users', err);
  }
};

const { REST_SERVER_URL } = process.env;

export default client;
