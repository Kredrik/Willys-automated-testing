let slowDownMs = 0;
module.exports = () => new Promise(res => setTimeout(res, slowDownMs));
  //const slowDown = require('./sleep.js');