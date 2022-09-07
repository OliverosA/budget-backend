const express = require('express');
const app = express();
const oracle = require('./src/utils/db');
const { server } = require('./src/config/config');
const guard = require('./src/guard/guard');

const personRoutes = require('./src/routes/person');
const invalidRoutes = require('./src/routes/404');
const categoryRoutes = require('./src/routes/category');

//middelware
app.use(express.json());

app.use(personRoutes);
app.use(guard);
// Handler: categories
app.use(categoryRoutes);
//Handler: 404
app.use(invalidRoutes);

oracle
  .start()
  .then(() => {
    console.log('Oracle Database Connected!!!');
    app.listen(server.port, () => {
      console.log(`Server running on port: ${server.port}`);
    });
  })
  .catch((error) => console.log(error));
