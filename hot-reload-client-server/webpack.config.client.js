'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client/index'
  ],

  output: {
    path: path.join(__dirname, '.build'),
    publicPath: 'http://localhost:3001/',
    filename: 'client.js'
  },

  target: 'web',

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'common')
      ]
    }]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILD_TARGET': '"client"'
      }
    })
  ],

  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true
  }
}
