const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
    util: './src/js/util.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
