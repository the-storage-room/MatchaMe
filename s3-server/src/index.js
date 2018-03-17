import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import helmet from 'helmet';
import router from './components/s3router.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    allowedHeaders: 'Content-Type, authorization',
    methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
  }),
)

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`S3 server listening on port ${PORT}`));
