import App from './config';

const { PORT } = process.env;

App.listen(PORT, () => console.log('Matchmaker server listening on port ', PORT));