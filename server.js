const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const knex = require('./knex/knex.js');
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})