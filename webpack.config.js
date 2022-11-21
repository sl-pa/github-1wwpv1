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
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].min.css',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
