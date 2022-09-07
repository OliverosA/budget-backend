const express = require('express');
const app = express();
const oracle = require('./src/utils/db');
const { server } = require('./src/config/config');

const requestHandler = (req, res) => {
  console.log('Request!!');
};

//middelware
app.use(requestHandler);

oracle
  .start()
  .then(() => {
    console.log('Oracle Database Connected!!!');
    app.listen(server.port, () => {
      console.log(`Server running on port: ${server.port}`);
    });
  })
  .catch((error) => console.log(error));
