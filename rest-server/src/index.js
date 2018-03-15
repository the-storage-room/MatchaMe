import App from './config/express';
import './config/database';

const PORT = 5000;

App.listen(PORT, () => console.log('Listening on port ', PORT));
