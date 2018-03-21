import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import helmet from 'helmet';
import router from './components/s3router';

const app = express();

app.use(
  cors({
    origin: process.env.STATIC_SERVER_URL,
    allowedHeaders: 'Content-Type, authorization',
    methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
  }),
)

app.use(helmet()); 
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`S3 server listening on port ${PORT}`));
