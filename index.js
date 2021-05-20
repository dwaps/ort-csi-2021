// index.js
const LoadingBar = require('./event');
const event = new LoadingBar();

const ld = new LoadingBar(30)
ld.start()