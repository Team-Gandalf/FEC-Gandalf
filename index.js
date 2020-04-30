const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8080;

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Serving is now listening on port: ${port}`);
})