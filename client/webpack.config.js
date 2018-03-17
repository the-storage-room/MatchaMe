const webpack = require('webpack');
const path = require('path');

const Dotenv = require('dotenv-webpack');

const SRC_DIR = path.join(__dirname, '/src');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new Dotenv()]
};
