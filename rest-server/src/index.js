import App from './config/express';
import './config/database';

const { PORT } = process.env;

App.listen(PORT, () => console.log('Rest-server listening on port ', PORT));
