import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import client from './config/redis/';
import routes from './components/redisRouter';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/redis', routes);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Redis server listening on port ${PORT}`));
