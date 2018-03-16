import App from './config/express';
import './config/database';

const PORT = process.env.PORT;

App.listen(PORT, () => console.log('Listening on port ', PORT));
