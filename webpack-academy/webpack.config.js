'use strict'

const { join } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'build')
  }
}
