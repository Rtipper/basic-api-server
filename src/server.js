'use strict';

// 3RD PARTY DEPENDENCIES
const express = require('express');
const app = express();

// INTERNAL MODULES
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middlerware/logger.js');
const validator = require ('./middleware/validator.js');
const foodRoutes = require ('./routes/food.js');
const clothesRoutes = require ('./routes/clothes.js');

// INTERNAL CONSTANTS
const PORT = procees.env.PORT || 3000;

app.use(exrpess.json());
app.use(foodRoutes);
app.use(clothesRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  }
}