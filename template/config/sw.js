const path = require('path');
const dist = './dist';

module.exports = {
  workbox: {
    globDirectory: dist,
    globPatterns: ['**/*.{html,js,css}'],
    swDest: path.join(dist, 'module/service-worker.js'),
    clientsClaim: true,
    skipWaiting: true,
  },
  register: {
    filePath: path.resolve(__dirname, '../src/module/sw-register.js'),
    prefix: '..',
    output: 'module/sw-register.js'
  }
};