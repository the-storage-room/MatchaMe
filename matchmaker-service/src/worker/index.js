import cron from 'cron';
import { matchaMe } from './matchmakingService.js';

const CronJob = cron.CronJob;

export const job = new CronJob({
  cronTime: '0 */2 * * *',
  onTick: async () => {
    try {
      await matchaMe();
      console.log('matchmaking worker finished!');
    } catch (err) {
      console.log('error on matchmaker service cron', err);
    }
    start: true;
    timeZone: 'America/Los Angeles';
  }
});
