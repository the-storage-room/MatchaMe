const express = require('express');
const bodyParser = require('body-parser');
const router = require("./router/index.js");
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
