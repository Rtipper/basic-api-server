'use strict';

const logger = (req, res, next) => {
  console.log(`REQ PATH:`, req.path);
  console.log(`REQ METHOD:`, req.method);
  next(); // USED TO MOVE TO NEXT PIECE OF MIDDLEWARE IN THE CHAIN. STOPS IF NONE AVAILABLE
}

module.exports = logger;