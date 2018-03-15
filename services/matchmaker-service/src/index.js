const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1147;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () => console.log('Matchmaker server listening on port ', PORT))