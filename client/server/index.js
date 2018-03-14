const express = require('express');
const path = require('path');

const app = express();
const PORT = 1337;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log('Serving static files on port ', PORT));

