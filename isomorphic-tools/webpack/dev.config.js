'use strict'

const { join } = require('path')
// const WebpackIsomorphicTools = require('webpack-isomorphic-tools/plugin')

// const isomorphicTools = new WebpackIsomorphicTools(
//   require('./utils/isomorphic-tools-config')
// ).development()

module.exports = {
  context: join(__dirname, '..'),

  entry: {
    main: join(__dirname, '..', 'src', 'client', 'index.js')
  },

  output: {
    path: join(__dirname, '..', 'dist', 'client'),
    filename: '[name].[hash].js'
  },

  // plugins: [
  //   isomorphicTools
  // ]
}
