const App = require('./config/express');
require('./config/database');

const PORT = 5000;

App.listen(PORT, () => console.log('Listening on port ', PORT));
