'use strict'

const webpack = require('webpack')
const { join }= require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    join(__dirname, '..', 'src', 'server', 'index')
  ],

  output: {
    path: join(__dirname, '.build'),
    filename: 'server.js'
  },

  watch: true,
  target: 'node',

  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: join(__dirname, '..', 'src')
      }
    ]
  },

  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILD_TARGET': '"server"'
      }
    })
  ]
}
