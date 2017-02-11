'use strict'

const { join } = require('path')

module.exports = {
  entry: join(__dirname, 'src', 'index.js'),

  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: [
          ['es2015', { modules: false }]
        ]
      }
    }]
  }
}
