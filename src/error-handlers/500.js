'use strict';

function handleError (err, req, res, next) {
  res.status(500).json({ status: 500, msg: 'broken, not working'});
}

module.exports = handleError;