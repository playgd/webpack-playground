'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: 'dist',
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.jpg$/,
      use: [{
        loader: 'file-loader',
        query: {
          name: path.join('images', '[name].[ext]'),
          publicPath: '/dist/'
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}
