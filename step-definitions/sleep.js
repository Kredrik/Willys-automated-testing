let slowDownMs = 2000;
module.exports = ()
  => new Promise(res => setTimeout(res, slowDownMs));
  //const slowDown = require('./sleep.js');