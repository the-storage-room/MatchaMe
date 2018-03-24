import App from './config/express/index';
import db from './config/database/index';

const { PORT } = process.env;

App.listen(PORT, () => console.log('Matchmaker server listening on port ', PORT));

db.connect();