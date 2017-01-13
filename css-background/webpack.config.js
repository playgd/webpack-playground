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
      loader: 'file-loader'
    }]
  }
}
