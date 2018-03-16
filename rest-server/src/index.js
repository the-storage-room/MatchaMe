import App from './config/express';
import './config/database';

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => console.log('Listening on port ', PORT));
