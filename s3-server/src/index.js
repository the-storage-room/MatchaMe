import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

const app = express();
import router from './components/s3router.js';


app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`S3 server listening on port ${PORT}`));
