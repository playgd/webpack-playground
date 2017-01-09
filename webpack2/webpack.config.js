'use strict'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/[name].js',
    libraryTarget: 'amd'
  }
}
