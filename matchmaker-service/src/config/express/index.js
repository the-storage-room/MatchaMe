import express from 'express';
import bodyParser from 'body-parser';
import { job } from '../../worker/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

job.start();
console.log('MATCHMAKING CRON JOB STATUS:', job.running)

module.exports = app;