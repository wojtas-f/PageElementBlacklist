const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
    },
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  entry: {
    popup: './src/popup.js',
    options: './src/options.js',
    background: './src/background.js',
  },
  output: {
    path: path.join(__dirname, '/public/js'),
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
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './views/options.html',
      filename: '../options.html',
    }),
    new HtmlWebPackPlugin({
      template: './views/popup.html',
      filename: '../popup.html',
    }),
  ],
};
