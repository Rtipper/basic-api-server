'use strict';

// 3RD PARTY DEPENDENCIES
const express = require('express');

//INTERNALS
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const clothesRoutes = require('./routes/clothes.js');
const foodRoutes = require('./routes/food.js');

const app = express();
app.use(express.json());

//ROUTES
app.use(clothesRoutes);
app.use(foodRoutes);


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Now listening on port: ${port}`);
    });
  }
};