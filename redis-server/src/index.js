import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import client from './config/redis/';
// import router from './components/redisRouter';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/redis', router);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Redis server listening on port ${PORT}`));
