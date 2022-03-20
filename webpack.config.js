const path = require('path');

module.exports = {
  entry: {
    popup: './src/popup.js',
    options: './src/options.js',
    background: './src/background.js',
  },
  output: {
    path: path.join(__dirname, '/assets/js'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
