const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Caching'
    }),
  ]
};