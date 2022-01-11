let slowDownMs = 3500;
module.exports = () => new Promise(res => setTimeout(res, slowDownMs));
  //const slowDown = require('./sleep.js');