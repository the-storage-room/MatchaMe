const App = require('../config/express');

const PORT = process.env.PORT || 1147;

App.listen(PORT, () => console.log('Matchmaker server listening on port ', PORT));