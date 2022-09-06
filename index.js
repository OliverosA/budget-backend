const express = require('express');
const app = express();
const { server } = require('./src/config/config');

const requestHandler = (req, res) => {
  console.log('Request!!');
};

//middelware
app.use(requestHandler);

app.listen(server.port, () => {
  console.log(`Server running on port: ${server.port}`);
});
