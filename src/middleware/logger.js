'use strict';

module.exports = (req, res, next) => {
  console.log('request info', req.path, req.method);
}